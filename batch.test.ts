import assert from "node:assert/strict";
import { batches } from "./batch.ts";

assert.deepEqual(batches([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
assert.throws(() => batches([1], 0), RangeError);
