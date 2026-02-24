import fs from "fs/promises";
import path from "path";

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
const IGNORES = new Set(["node_modules", ".git", "dist", "build", "out"]);

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

async function replaceInFile(file) {
    const content = await fs.readFile(file, "utf8");
    if (!content.includes("₦")) return false;
    const backupPath = file + ".bak";
    await fs.writeFile(backupPath, content, "utf8"); // create a quick backup
    const newContent = content.split("₦").join("$");
    await fs.writeFile(file, newContent, "utf8");
    return true;
}

async function main() {
    console.log("Scanning for ₦ -> $ ...");
    const files = await walk(ROOT);
    const modified = [];
    for (const f of files) {
        try {
            const ok = await replaceInFile(f);
            if (ok) modified.push(path.relative(ROOT, f));
        } catch (err) {
            console.error("Error processing", f, err);
        }
    }
    console.log(`Done. Modified ${modified.length} files.`);
    for (const m of modified) console.log(" -", m);
    if (modified.length === 0) console.log("No occurrences of ₦ found.");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});