import { SocialMediaOptions } from '../../global/types/socialMediaOptions.types';
import { StockOptions } from '../../global/types/stockOptions.types';
import { TimeWindowOptions } from '../../global/types/timeWindowOptions.types';
import { OptionButtonTypes } from './optionButtonTypes.types';

export interface SelectionListOptionObject {
  currentType: OptionButtonTypes;
  data: {
    symbol: StockOptions;
    socialMedia: SocialMediaOptions;
    timeWindow: TimeWindowOptions;
  };
}

export type SelectionListOptions = Array<SelectionListOptionObject>;
