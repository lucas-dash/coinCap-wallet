export function compactNumber(numbers: number | string) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  if (typeof numbers === 'number') return formatter.format(numbers);

  if (typeof numbers === 'string') return formatter.format(Number(numbers));
}

export function currencyFormat(price: number | string, digits: number = 2) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
  });

  if (typeof price === 'number') return formatted.format(price);

  if (typeof price === 'string') return formatted.format(Number(price));
}

export function transactionFormat(payment: number | string) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });

  if (typeof payment === 'number') return formatted.format(payment);

  if (typeof payment === 'string') return formatted.format(Number(payment));
}
