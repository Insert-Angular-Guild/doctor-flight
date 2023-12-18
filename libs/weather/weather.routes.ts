// angular
import { Route } from '@angular/router';

// widget
import { widgetListRoutes } from './feature-widget-list/src/lib/widget-list.routes';

export const weatherRoutes: Route[] = [...widgetListRoutes];
