export async function getCoin(coinId: string) {
  const apiKey = process.env.NEXT_PUBLIC_CRYPTOAPIKEY;

  if (!apiKey) throw new Error('APi key is missing');

  const res = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    }
  );

  if (!res) throw new Error('Failed to fetch coin data');

  return res.json();
}
