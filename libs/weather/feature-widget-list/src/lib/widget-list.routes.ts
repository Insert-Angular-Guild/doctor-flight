import { Route } from '@angular/router';

export const widgetListRoutes: Route[] = [
  {
    path: 'weather',
    loadComponent: () =>
      import(
        '../../../feature-widget-list/src/lib/weather-widget-list/weather-widget-list-container.component'
      ).then((x) => x.WeatherWidgetListComponentContainer)
  }
];
