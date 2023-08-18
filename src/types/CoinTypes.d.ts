type CryptoData = {
  data: {
    stats: Stats;
    coins: Coin[];
  };
};

type Stats = {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
};

type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  ['24hVolume']: string;
  btcPrice: string;
};

type CoinData = {
  data: {
    coin: CoinId;
  };
};

type CoinId = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: {
    name: string;
    url: string;
    type: string;
  }[];
  supply: {
    confirmed: boolean;
    max: string;
    circulating: string;
    total: string;
  };
  '24hVolume': string;
  marketCap: string;
  price: string;
  btcPrice: string;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  sparkline: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
};
