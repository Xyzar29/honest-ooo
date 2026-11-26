# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/xyzar29/honest-ooo/rank.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/xyzar29/honest-ooo/reward.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

An entry for the make.fun competition
**[The Painfully Honest Out-of-Office](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)**.

## The entry

One out-of-office auto-reply — a single sentence of at most 200 characters,
painfully honest about the sender's absence and inbox, yet polite enough that
a manager would let it stand:

> I'm away until Monday, finally taking the leave I cancelled twice because my inbox never stops asking; your email is safe, and I'll reply properly once I feel human again.

## How it works

`main.ts` (Node 22) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, clearing only the output directory's
contents first (never the directory itself, which the grader mounts).

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
