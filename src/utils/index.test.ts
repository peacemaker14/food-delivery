import { describe, expect, test } from "bun:test";

import { roundToOneDecimal } from "./index";

describe("roundToOneDecimal", () => {
  test("should round number to one decimal place", () => {
    expect(roundToOneDecimal(1.23)).toBe(1.2);
    expect(roundToOneDecimal(1.27)).toBe(1.3);
    expect(roundToOneDecimal(1)).toBe(1.0);
  });

  test("should handle negative numbers", () => {
    expect(roundToOneDecimal(-1.23)).toBe(-1.2);
    expect(roundToOneDecimal(-1.27)).toBe(-1.3);
  });

  test("should handle zero", () => {
    expect(roundToOneDecimal(0)).toBe(0);
  });
});
