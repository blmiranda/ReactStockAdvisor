interface StockObject {
  symbol: string;
  date: string;
  price: number;
  socialMediaCount: number;
}

export type Stocks = Array<StockObject>;
