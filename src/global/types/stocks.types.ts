import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface StockObject {
  symbol: string;
  icon: IconProp;
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
