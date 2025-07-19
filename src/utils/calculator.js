export function calculateAnnualDividend(monthlyDividend) {
  return (monthlyDividend * 12).toFixed(2);
}

export function calculateFutureValue(monthlyDividend, reinvestRate, years) {
  let total = monthlyDividend * 12;
  for (let i = 1; i <= years; i++) {
    total += total * (reinvestRate / 100);
  }
  return total.toFixed(2);
}
Add calculator.js with functions for annual and future dividend calculations
