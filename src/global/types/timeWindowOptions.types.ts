import { IconName } from '@fortawesome/fontawesome-svg-core';

export type TimeWindow = 10 | 15 | 30 | 60;

export interface TimeWindowOptionObject {
  name: string;
  value: TimeWindow;
  icon: IconName;
}

export type TimeWindowOptions = Array<TimeWindowOptionObject>;
