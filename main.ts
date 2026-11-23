// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
//
// Writes one line, at most 200 characters, about a small good thing that
// happened today, to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./out).
// Standard library only. No network, no Date.now, no Math.random:
// two runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line: 169 characters, one line, no trailing newline.
// The em dash is written as \u2014 so the source stays ASCII and the
// entry's bytes can never depend on the editor that saved this file.
const ENTRY =
  "This morning a stranger at the bakery pressed the last warm roll into my hands and whispered, 'You look like you needed this more than I did' \u2014 and, judge, I really did.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only
// white space. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-200 gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
