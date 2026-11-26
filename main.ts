// The Painfully Honest Out-of-Office — make.fun entry
// Writes one painfully honest, still polite out-of-office auto-reply
// (a single sentence, at most 200 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { chmodSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm away until Monday, finally taking the leave I cancelled twice because my inbox never stops asking; your email is safe, and I'll reply properly once I feel human again.";

// The gate allows 1–200 characters of UTF-8 text, a single line.
// Fail loudly here rather than handing the judge an invalid entry.
if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be a single line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
// Clear only the directory's contents, never the directory itself:
// the grader mounts $MAKEFUN_OUTPUT_DIR and removing it fails with EPERM.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), LINE, { mode: 0o644, encoding: "utf8" });
// writeFileSync's mode is masked by the process umask, so set it explicitly.
chmodSync(join(outDir, "entry.txt"), 0o644);
