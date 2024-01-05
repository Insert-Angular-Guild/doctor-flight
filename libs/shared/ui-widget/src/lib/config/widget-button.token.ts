// anguler
import { EventEmitter, InjectionToken } from '@angular/core';

export interface WidgetButton {
  refresh: EventEmitter<void>;
}

export const WIDGET_BUTTON = new InjectionToken<WidgetButton>(
  'widget-button.token',
  {
    factory(): WidgetButton {
      return {
        refresh: new EventEmitter<void>()
      };
    },
    providedIn: 'root'
  }
);
