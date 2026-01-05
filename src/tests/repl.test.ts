import { cleanInput } from "../repl.js";
import { describe, expect, test } from "vitest";

type TestCase = {
  input: string;
  expected: string[];
};

const testCases: TestCase[] = [
  {
    input: "  Hello World  ",
    expected: ["Hello", "World"],
  },
  {
    input: " Pokedex  CLI App",
    expected: ["Pokedex", "CLI", "App"],
  },
  {
    input: "Boot.dev Backend  Course ",
    expected: ["Boot.dev", "Backend", "Course"],
  },
];

describe.each(testCases)("cleanInput($input)", ({ input, expected }) => {
  test(`Expected ${JSON.stringify(expected)} with length ${
    expected.length
  }`, () => {
    const actual = cleanInput(input);
    expect(actual).toHaveLength(expected.length);

    for (const idx in actual) {
      expect(actual[idx]).toBe(expected[idx]);
    }
  });
});
