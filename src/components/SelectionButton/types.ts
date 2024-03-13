import { OptionButtonTypes } from '../../global/types/optionButtonTypes.types';
import { SocialMediaOptionObject } from '../../global/types/socialMediaOptions.types';
import { StockOptionObject } from '../../global/types/stockOptions.types';
import { TimeWindowOptionObject } from '../../global/types/timeWindowOptions.types';

export interface Props {
  onPress: () => void;
  item: StockOptionObject | SocialMediaOptionObject | TimeWindowOptionObject;
  buttonType: OptionButtonTypes;
  activeSelection:
    | Array<StockOptionObject>
    | Array<SocialMediaOptionObject>
    | Array<TimeWindowOptionObject>
    | null;
}
