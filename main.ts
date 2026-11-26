// One Star for Earth, Five for the Food.
//
// An alien visitor rates the planet one star, then can't help praising
// the cooking anyway. Every complaint is paperwork-flavoured and
// off-world — a parking fine for hovering, a tax bill for tentacles,
// and standing in line just to breathe — before the ending flips it:
// the planet earns one star, while the dumplings earn a whole galaxy.
//
// One sentence, 136 characters, well inside the 200-character gate.
// Fully deterministic: one fixed string, no clock, no Math.random,
// no network, no file reads. The same bytes every run.
import * as fs from "node:fs";

const REVIEW_TEXT =
  "One star: Earth fined my ship for hovering, taxed my tentacles, and made me queue for oxygen \u2014 but the dumplings alone deserve a galaxy.";

function resolveEntryPath(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return outDir + "/entry.txt";
}

const entryPath = resolveEntryPath();
fs.mkdirSync(entryPath.slice(0, entryPath.lastIndexOf("/")), {
  recursive: true,
});
fs.writeFileSync(entryPath, REVIEW_TEXT, "utf8");
