import { StockObject } from './stocks.types';

export type SocialMediaKeys = keyof StockObject['socialMediaCount'];
export interface TrendBasedConfig {
  socialMediaServices: Array<SocialMediaKeys>;
}
