type UserCollection = {
  avatar: string | null;
  wallet: {
    transactions: Transaction[];
  };
  watchlist: Coin[];
};

type Transaction = {
  id: string;
  name: string;
  coinDetail: TrasactionCoin;
  amount: number;
  pricePerCoin: number;
  date: string;
  fee: number;
  note: string;
  type: 'Deposit' | 'Withdraw';
};

type TransactionCoin = {
  url: string;
  symbol: string;
  image: string;
};

type HoldingType = {
  coinName: string;
  coinDetail: TransactionCoin;
  valueAtPurchase: number[];
  hodling: number;
  buyPrice: number[];
  avgBuyPrice: number;
};

type RealTimeType = {
  valueNow: number;
  profit: number;
  profitable: boolean;
  profitPercentage: string;
  coinPrice: string;
  coinChange: string;
};

type ReaTimelHoldingType = HoldingType & {
  realTime: RealTimeType;
};

type TotalOverviewType = {
  balance: number;
  totalDeposits: number;
  allTimeProfit: number;
  allTimeProfitInPercentage: string;
};
