export type CalculationType = 'BMI';

export interface CalculationInput {
  height: number;
  weight: number;
}

export default class Calculation {
  id: string;
  type: CalculationType;
  input: CalculationInput;
  result: number;
  date: Date;

  constructor(
    type: CalculationType,
    input: CalculationInput,
    result: number
  ) {
    this.id = Date.now().toString();
    this.type = type;
    this.input = input;
    this.result = result;
    this.date = new Date();
  }
}
