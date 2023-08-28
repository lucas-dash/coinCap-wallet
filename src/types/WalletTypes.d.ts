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
