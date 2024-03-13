import { Dispatch, SetStateAction } from 'react';
import { SocialMediaOptions } from '../../global/types/socialMediaOptions.types';
import { StockOptions } from '../../global/types/stockOptions.types';
import { TimeWindowOptions } from '../../global/types/timeWindowOptions.types';

export interface Props {
  selectionOptionsIsVisible: boolean;
  setSelectionOptionsIsVisible: Dispatch<SetStateAction<boolean>>;
}

export type DataListOptions =
  | StockOptions
  | SocialMediaOptions
  | TimeWindowOptions;
