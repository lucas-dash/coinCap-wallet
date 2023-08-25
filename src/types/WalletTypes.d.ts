type UserCollection = {
  avatar: string | null;
  wallet: {
    transactions: Transaction[];
  };
  watchlist: Coin[];
};

type Transaction = {
  id: string;
  coin: string;
  amount: number;
  pricePerCoin: number;
  date: string;
  fee: number | undefined;
  note: string | undefined;
  type: 'Deposit' | 'Withraw' | 'Transfer';
};
