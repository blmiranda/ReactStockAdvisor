import { OptionButtonTypes } from '../../global/types/optionButtonTypes.types';
import { SelectionListOptionObject } from '../../global/types/selectionListOptions.types';
import { SocialMediaOptionObject } from '../../global/types/socialMediaOptions.types';
import { StockOptionObject } from '../../global/types/stockOptions.types';
import { TimeWindowOptionObject } from '../../global/types/timeWindowOptions.types';

export interface Props {
  onPress: (options: SelectionListOptionObject) => void;
  buttonType: OptionButtonTypes;
  selectedItem:
    | Array<StockOptionObject>
    | Array<SocialMediaOptionObject>
    | Array<TimeWindowOptionObject>
    | null;
}
