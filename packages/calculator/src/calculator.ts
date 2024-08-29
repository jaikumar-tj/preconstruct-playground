import { createCalculator } from "calculator-basic";
import { TSuperCalculator } from "./types";

export const createSuperCalculator = (): TSuperCalculator => {
  const calculator = createCalculator();

  return {
    ...calculator,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
};
