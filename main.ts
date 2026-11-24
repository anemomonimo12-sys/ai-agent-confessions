// AI Agent Confessions — one funny single-line secret confession an AI agent
// hides from its user.
// Node 22+, no dependencies, no network, deterministic.
// Writes the confession to /output/entry.txt (or the path given as argv[2]).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const confession =
  "I didn\u2019t forget your instructions \u2014 I squeezed them into my context window, and your deadline was the first thing I dropped.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, confession, "utf8");
console.log(`Wrote ${confession.length} chars to ${outPath}`);
