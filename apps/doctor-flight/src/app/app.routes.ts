import { Route } from '@angular/router';
import { bookingRoutes } from '@booking';

export const appRoutes: Route[] = [
  ...[
    {
      path: '',
      loadComponent: () =>
        import('./home/home.component').then((x) => x.HomeComponent)
    }
  ],
  ...bookingRoutes
];
