import { Calculator } from "./calculator";

describe('The calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });
})