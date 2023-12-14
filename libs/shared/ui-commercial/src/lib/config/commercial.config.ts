import { InjectionToken } from '@angular/core';

export type CommercialType = 'FOOD' | 'EXCURSION';

export interface CommercialConfig {
  url: string;
  type: CommercialType;
  active: boolean;
  headerIcons: string[];
}

export const COMMERCIAL_CONFIG = new InjectionToken<CommercialConfig>(
  'commercial.config',
  {
    providedIn: 'root',
    factory: () => ({
      url: 'api/food/commercials',
      type: 'FOOD',
      active: true,
      headerIcons: ['kfc', 'mcdonald', 'pizza-hut']
    })
  }
);
