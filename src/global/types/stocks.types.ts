export interface StockObject {
  symbol: string;
  date: string;
  price: string;
  socialMediaCount: {
    facebook: number;
    instagram: number;
    twitter: number;
    tiktok: number;
  };
}

export type Stocks = Array<StockObject>;
