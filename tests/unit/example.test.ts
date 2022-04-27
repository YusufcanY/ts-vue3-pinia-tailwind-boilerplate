import { trimAddress } from "../../src/helpers";
import { it, describe, expect } from "vitest";

describe("helper tests", () => {
  it("should trim address successfully", () => {
    expect(trimAddress("0xa9766b07867b468A0Af6d2EAc47a2B17F64A443C")).toBe(
      "0xa976...443C"
    );
  });
});
