import { sum } from "../sum";

test("some fxn should cal the sum of two num", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
