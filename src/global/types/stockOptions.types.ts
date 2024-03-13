import { IconName } from '@fortawesome/fontawesome-svg-core';

export type StockTickerOptions =
  | 'AAPL'
  | 'MSFT'
  | 'GOOGL'
  | 'META'
  | 'ABNB'
  | 'AMZN'
  | 'UBER';

export interface StockOptionObject {
  name: string;
  value: StockTickerOptions;
  icon: IconName;
}

export type StockOptions = Array<StockOptionObject>;
