import { IconName } from '@fortawesome/fontawesome-svg-core';
import { OptionButtonTypes } from '../../global/types/optionButtonTypes.types';

export type ConfigsMap = {
  [key in OptionButtonTypes]: {
    name: string;
    icon: IconName;
  };
};
