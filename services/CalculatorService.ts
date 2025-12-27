export function calculateBMI(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return Number(bmi.toFixed(2));
}

export function interpretBMI(bmi: number): string {
  if (bmi < 18.5) return 'Недостаточная масса тела';
  if (bmi < 25) return 'Нормальная масса тела';
  if (bmi < 30) return 'Избыточная масса тела';
  return 'Ожирение';
}
