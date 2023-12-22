// anguler
import { EventEmitter, InjectionToken } from '@angular/core';

export interface WidgetButton {
  refreshBtn: EventEmitter<void>;
}

export const WIDGETBUTTON = new InjectionToken<WidgetButton>(
  'widget-button.token',
  {
    factory(): WidgetButton {
      return {
        refreshBtn: new EventEmitter<void>()
      };
    },
    providedIn: 'root'
  }
);
