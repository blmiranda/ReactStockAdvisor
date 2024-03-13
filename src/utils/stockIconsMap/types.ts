import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StockTickerOptions } from '../../global/types/stockOptions.types';

export type IconsMap = {
  [key in StockTickerOptions]: IconProp;
};
