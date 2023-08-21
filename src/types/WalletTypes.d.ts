type UserCollection = {
  avatar: string | null;
  wallet: {
    transactions: Transaction[];
  };
  watchlist: [];
};

interface Transaction {
  coin: string;
  coinValue: number;
  pricePerCoin: number;
  date: string;
  fee: number;
  note: string;
  type: string;
}
