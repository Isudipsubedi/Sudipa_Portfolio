/** Small, dependency-free finance helpers. Formatting follows Nepali (lakh/crore) grouping. */
export const npr = (n: number, dp = 2) =>
  Number.isFinite(n) ? "Rs " + n.toLocaleString("en-IN", { minimumFractionDigits: dp, maximumFractionDigits: dp }) : "—";

export function vat(amount: number, rate: number, inclusive: boolean) {
  const r = rate / 100;
  const net = inclusive ? amount / (1 + r) : amount;
  const tax = net * r;
  return { net, tax, gross: net + tax };
}

export function emi(principal: number, annualRate: number, years: number) {
  const n = Math.round(years * 12);
  const i = annualRate / 100 / 12;
  if (n <= 0 || principal <= 0) return { emi: NaN, interest: NaN, total: NaN, n };
  const e = i === 0 ? principal / n : (principal * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  const total = e * n;
  return { emi: e, interest: total - principal, total, n };
}

/** Fixed-deposit maturity with periodic compounding (Nepali banks typically compound quarterly). */
export function fd(principal: number, annualRate: number, years: number, perYear: number) {
  const m = principal * Math.pow(1 + annualRate / 100 / perYear, perYear * years);
  return { maturity: m, interest: m - principal };
}
