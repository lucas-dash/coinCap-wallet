export function compactNumber(numbers: number | string) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  if (typeof numbers === 'number') return formatter.format(numbers);

  if (typeof numbers === 'string') return formatter.format(Number(numbers));
}
