import { createCalculator, TCalculator } from "number-two";

export type TSuperCalculator = TCalculator & {
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};

export const createSuperCalculator = (): TSuperCalculator => {
  const calculator = createCalculator();

  return {
    ...calculator,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
};
