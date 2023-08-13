export async function getCryptoData() {
  const apiKey = process.env.NEXT_PUBLIC_CRYPTOAPIKEY;

  if (!apiKey) throw new Error('APi key is missing');

  const res = await fetch(
    'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    }
  );

  if (!res) throw new Error('fetch coin data throw error');

  return res.json();
}
