import { Route } from '@angular/router';

export const bookingListRoutes: Route[] = [
  {
    path: 'bookings',
    loadComponent: () =>
      import(
        '../../../feature-list-bookings/src/lib/booking-feature-list/booking-feature-list.component'
      ).then((x) => x.BookingFeatureListComponent)
  }
];
