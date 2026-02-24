import fs from "fs/promises";
import path from "path";
import process from "process";

const ROOT = process.cwd();
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".html", ".md", ".mdx"]);
const IGNORES = new Set(["node_modules", ".git", "dist", "build", "out", "coverage"]);

function usage() {
    console.log(`Usage:
  node scripts/remove-1700.mjs [--apply]

Options:
  --apply    Actually write changes. Otherwise runs in preview mode.
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
    const opts = { apply: false };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--apply") opts.apply = true;
        else usage();
    }
    return opts;
}

function previewReplacements(content) {
    const matches = [];
    // match standalone 1700 or 1,700 with word boundaries, not part of longer number/identifier
    const reList = [/\b1,700\b/g, /\b1700\b/g];
    for (const re of reList) {
        let m;
        while ((m = re.exec(content)) !== null) {
            const idx = m.index;
            const ctxStart = Math.max(0, idx - 40);
            const ctxEnd = Math.min(content.length, idx + 40);
            matches.push({
                found: m[0],
                index: idx,
                context: content.slice(ctxStart, ctxEnd).replace(/\n/g, " "),
            });
        }
    }
    return matches;
}

async function processFile(file, apply) {
    const raw = await fs.readFile(file, "utf8");
    const matches = previewReplacements(raw);
    if (matches.length === 0) return null;

    // create updated content by removing occurrences
    let updated = raw.replace(/\b1,700\b/g, "").replace(/\b1700\b/g, "");
    // collapse multiple spaces that may result
    updated = updated.replace(/ {2,}/g, " ");
    // collapse accidental "USD =" or similar spacing fixes not done automatically

    if (!apply) {
        return { file, matches, original: raw };
    }

    const bak = file + ".bak";
    await fs.writeFile(bak, raw, "utf8");
    await fs.writeFile(file, updated, "utf8");
    return { file, matches, original: raw, bak };
}

async function main() {
    const opts = parseArgs();
    const files = await walk(ROOT);
    const results = [];
    for (const f of files) {
        try {
            const res = await processFile(f, opts.apply);
            if (res) results.push(res);
        } catch (err) {
            console.error("Error:", f, err.message || err);
        }
    }

    if (results.length === 0) {
        console.log("No occurrences of 1700 / 1,700 found.");
        return;
    }

    console.log(`Previewing ${results.length} file(s) with matches:\n`);
    for (const r of results) {
        console.log(`File: ${path.relative(ROOT, r.file)}`);
        for (const m of r.matches.slice(0, 10)) {
            console.log(`  - ${m.found}  ... ${m.context}`);
        }
        if (r.matches.length > 10) console.log(`  ... and ${r.matches.length - 10} more`);
        if (r.bak) console.log(`  WROTE (backup -> ${path.relative(ROOT, r.bak)})`);
        console.log("");
    }

    if (!opts.apply) {
        console.log("Run with --apply to perform replacements and write backups (.bak).");
        return;
    }

    console.log("All changes applied. Now committing and pushing...");

    // Commit & push: create a simple cross-platform helper using child_process
    const { execSync } = await
    import ("child_process");
    try {
        execSync("git add -A", { stdio: "inherit" });
        execSync('git commit -m "Remove literal 1700 occurrences (kept $ signs). Safe backups created."', { stdio: "inherit" });
        // set remote if not present - does not overwrite existing origin
        try { execSync("git remote get-url origin", { stdio: "ignore" }); } catch {
            execSync("git remote add origin https://github.com/klintech/giftb.git", { stdio: "inherit" });
        }
        const branch = execSync("git rev-parse --abbrev-ref