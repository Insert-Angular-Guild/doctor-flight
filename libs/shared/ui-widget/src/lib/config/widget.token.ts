import { InjectionToken } from '@angular/core';

export interface Widget {
  load: () => void;
  refresh: () => void;
}

export const WIDGET: InjectionToken<Widget> = new InjectionToken<Widget>(
  'widget.token',
  {
    factory(): Widget {
      return {
        load: () => {},
        refresh: () => {}
      };
    },
    providedIn: 'root'
  }
);
