import { IconName } from '@fortawesome/fontawesome-svg-core';
import { SocialMediaKeys } from './strategiesConfigs.types';

export interface SocialMediaOptionObject {
  name: string;
  value: Partial<SocialMediaKeys>;
  icon: IconName;
}

export type SocialMediaOptions = Array<SocialMediaOptionObject>;
