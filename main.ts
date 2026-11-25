// The Worst App Idea Ever Pitched — one line, one terrible idea.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const idea =
  "Uber, but for borrowing your neighbour's Wi-Fi — surge pricing kicks in the moment your job interview starts, and your driver is your neighbour, who changes the password daily.";

// Self-checking gate: the entry must be exactly one non-empty line,
// and within the sealed scorer's 1–280 character limit.
const lines = idea.split("\n");
if (lines.length !== 1 || idea.trim().length === 0 || !idea.endsWith(".") || idea.length > 280) {
  console.error("entry failed self-check: must be one non-empty line ending with a period, max 280 chars");
  process.exit(1);
}

// The sealed scorer grades /output/entry.txt, not stdout — write the line there.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), idea, "utf8");

console.log(idea);
