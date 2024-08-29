import { TCalculator } from "./types";

export const createCalculator = (): TCalculator => {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };
};
