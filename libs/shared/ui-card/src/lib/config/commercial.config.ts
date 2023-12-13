import { InjectionToken } from '@angular/core';

export type CommercialType = 'FOOD' | 'EXCURSION';

export interface Commercial {
  load: () => void;
  refresh: () => void;
}

export interface CommercialConfig {
  url: string;
  type: CommercialType;
  active: boolean;
}

export const COMMERCIAL_CONFIG = new InjectionToken<CommercialConfig>(
  'commercial.config',
  {
    providedIn: 'root',
    factory: () => ({
      url: 'api/food/commercials',
      type: 'FOOD',
      active: true
    })
  }
);

export const COMMERCIAL = new InjectionToken<Commercial>('commercial', {
  providedIn: 'root',
  factory: () => ({
    load: () => {},
    refresh: () => {}
  })
});
