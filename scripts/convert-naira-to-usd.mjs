import fs from "fs/promises";
import path from "path";
import process from "process";

const ROOT = process.cwd();
const EXTS = new Set([
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
    ".json",
    ".css",
    ".scss",
    ".html",
    ".md",
    ".mdx",
    ".svg",
]);
const IGNORES = new Set(["node_modules", ".git", "dist", "build", "out", "coverage"]);

function usage() {
    console.log(`Usage:
  node scripts/convert-naira-to-usd.mjs [--rate <NGN->USD rate>] [--apply] [--assume-dollar-was-naira] [--min-naira <number>]

Options:
  --rate <number>               Use this NGN->USD conversion rate (e.g. 0.0018). If omitted the script fetches the latest rate.
  --apply                       Actually write changes. Without this flag the script runs in preview mode.
  --assume-dollar-was-naira     Also convert large numbers followed by "$" (use if you previously replaced "₦" with "$").
  --min-naira <number>          Minimum numeric NGN value to convert when using --assume-dollar-was-naira (default: 1000).
  --decimals <n>                Number of decimals in formatted USD (default: 2).
`);
    process.exit(1);
}

async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const results = [];
    for (const entry of entries) {
        if (IGNORES.has(entry.name)) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...(await walk(full)));
        } else {
            if (EXTS.has(path.extname(entry.name))) results.push(full);
        }
    }
    return results;
}

function parseArgs() {
    const argv = process.argv.slice(2);
    const opts = {
        rate: null,
        apply: false,
        assumeDollarWasNaira: false,
        minNaira: 1000,
        decimals: 2,
    };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--rate") {
            opts.rate = Number(argv[++i]);
            if (Number.isNaN(opts.rate)) usage();
        } else if (a === "--apply") {
            opts.apply = true;
        } else if (a === "--assume-dollar-was-naira") {
            opts.assumeDollarWasNaira = true;
        } else if (a === "--min-naira") {
            opts.minNaira = Number(argv[++i]) || 1000;
        } else if (a === "--decimals") {
            opts.decimals = parseInt(argv[++i], 10) || 2;
        } else {
            usage();
        }
    }
    return opts;
}

async function fetchRate() {
    try {
        const res = await fetch("https://api.exchangerate.host/latest?base=NGN&symbols=USD");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (json && json.rates && typeof json.rates.USD === "number") return json.rates.USD;
    } catch (err) {
        // fall through
    }
    throw new Error("Failed to fetch live exchange rate. Provide --rate <value> to continue.");
}

function parseNumberString(s) {
    // remove commas and spaces, keep dot for decimals
    const cleaned = s.replace(/[, ]+/g, "");
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
}

function formatUSD(amount, decimals = 2) {
    // fixed decimal formatting, trimmed trailing zeros if decimals==0
    return Number(amount).toFixed(decimals);
}

async function processFile(file, rate, opts) {
    const raw = await fs.readFile(file, "utf8");
    let changed = false;
    const replacements = [];

    // 1) Replace explicit ₦ amounts: e.g. ₦62,000 or ₦ 62,000
    const nairaSymbolRegex = /₦\s*([0-9.,\s]+)/g;
    let newContent = raw.replace(nairaSymbolRegex, (m, numStr, offset) => {
        const ngn = parseNumberString(numStr);
        if (ngn === null) return m;
        const usd = ngn * rate;
        const usdStr = `$${formatUSD(usd, opts.decimals)}`;
        replacements.push({ from: m, to: usdStr });
        changed = true;
        return usdStr;
    });

    // 2) Replace NGN textual tokens: e.g. NGN 62,000  or 62,000 NGN
    const ngnPrefixRegex = /\bNGN\s*([0-9.,\s]+)/gi;
    newContent = newContent.replace(ngnPrefixRegex, (m, numStr) => {
        const ngn = parseNumberString(numStr);
        if (ngn === null) return m;
        const usd = ngn * rate;
        const usdStr = `$${formatUSD(usd, opts.decimals)}`;
        replacements.push({ from: m, to: usdStr });
        changed = true;
        return usdStr;
    });

    const ngnSuffixRegex = /([0-9.,\s]+)\s*NGN\b/gi;
    newContent = newContent.replace(ngnSuffixRegex, (m, numStr) => {
        const ngn = parseNumberString(numStr);
        if (ngn === null) return m;
        const usd = ngn * rate;
        const usdStr = `$${formatUSD(usd, opts.decimals)}`;
        replacements.push({ from: m, to: usdStr });
        changed = true;
        return usdStr;
    });

    // 3) Optionally handle numbers followed by $ that likely were originally ₦:
    if (opts.assumeDollarWasNaira) {
        // matches e.g. 62,000$ or 62000 $ (with optional space)
        const numberDollarRegex = /([0-9][0-9.,\s]+)\s*\$/g;
        newContent = newContent.replace(numberDollarRegex, (m, numStr) => {
            const ngn = parseNumberString(numStr);
            if (ngn === null) return m;
            if (ngn < opts.minNaira) return m; // skip small values likely legitimate USD
            const usd = ngn * rate;
            const usdStr = `$${formatUSD(usd, opts.decimals)}`;
            replacements.push({ from: m, to: usdStr });
            changed = true;
            return usdStr;
        });
    }

    if (!changed) return null;
    return { file, original: raw, updated: newContent, replacements };
}

async function main() {
    const opts = parseArgs();
    let rate = opts.rate;
    if (!rate) {
        console.log("Fetching live NGN -> USD rate...");
        rate = await fetchRate();
        console.log("Fetched rate: 1 NGN =", rate, "USD");
    } else {
        console.log("Using provided rate: 1 NGN =", rate, "USD");
    }

    const files = await walk(ROOT);
    const results = [];
    for (const file of files) {
        try {
            const res = await processFile(file, rate, opts);
            if (res) results.push(res);
        } catch (err) {
            console.error("Error processing", file, err);
        }
    }

    if (results.length === 0) {
        console.log("No NGN-like amounts found.");
        return;
    }

    console.log(`Previewing ${results.length} file(s) with replacements:\n`);
    for (const r of results) {
        console.log(`File: ${path.relative(ROOT, r.file)}`);
        for (const rep of r.replacements.slice(0, 20)) {
            // show up to first 20 replacements per file
            const fromTrim = rep.from.replace(/\s+/g, " ").trim();
            const toTrim = rep.to;
            console.log(`  - ${fromTrim}  =>  ${toTrim}`);
        }
        if (r.replacements.length > 20) {
            console.log(`  ... and ${r.replacements.length - 20} more changes`);
        }
        console.log("");
    }

    if (!opts.apply) {
        console.log("Run with --apply to write changes. Backups (*.bak) will be created for modified files.");
        return;
    }

    console.log("Applying changes...");
    for (const r of results) {
        const bak = r.file + ".bak";
        await fs.writeFile(bak, r.original, "utf8");
        await fs.writeFile(r.file, r.updated, "utf8");
        console.log("Wrote:", path.relative(ROOT, r.file), "(backup ->", path.relative(ROOT, bak) + ")");
    }
    console.log("Done.");
}

main().catch((err) => {
    console.error("Fatal:", err.message || err);
    process.exit(1);
});