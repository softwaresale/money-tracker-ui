import { DollarAmount } from "@api-client";

export const numberToDollarAmount = (amount: number): DollarAmount => {
  const dollars = Math.floor(amount);
  const cents = Math.round((amount - dollars) * 100);
  return { dollars, cents };
}