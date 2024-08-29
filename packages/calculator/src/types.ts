import { TCalculator } from "calculator-basic";

export type TSuperCalculator = TCalculator & {
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
};
