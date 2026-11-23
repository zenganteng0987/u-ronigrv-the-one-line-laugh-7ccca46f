// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes a single funny line (one sentence, at most 200 characters)
// to /output/entry.txt, validating length and single-line shape first.
// No network, no dependencies beyond the Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I set my alarm for 6 a.m. to seize the day, then snoozed it nine times — technically seizing it in installments.";

const OUTPUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(LINE);
mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(`wrote ${[...LINE].length} characters to ${OUTPUT}`);
console.log(LINE);
