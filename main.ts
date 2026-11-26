// One Star, Five Stars for the Food.
//
// A one-star review of Earth from an alien tourist that still slips in a
// real compliment about the food. The grievances are bureaucratic and
// specifically alien — fined for hovering, taxed tentacles, a queue for
// oxygen — and the turn lands in the last words: the planet gets one
// star, but the dumplings alone deserve a galaxy.
//
// One sentence, 136 characters, well inside the 200-character gate.
// Fully deterministic: one fixed string, no clock, no Math.random,
// no network, no file reads. The same bytes every run.
import * as fs from "node:fs";

const ENTRY =
  "One star: Earth fined my ship for hovering, taxed my tentacles, and made me queue for oxygen \u2014 but the dumplings alone deserve a galaxy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", ENTRY, "utf8");
