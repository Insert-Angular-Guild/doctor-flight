// angular
import { InjectionToken } from '@angular/core';

export interface BookingConfig {
  hideExternalCompanyBookings: boolean;
}

export const BOOKING_CONFIG = new InjectionToken<BookingConfig>(
  'booking.config',
  {
    providedIn: 'root',
    factory: () => ({
      hideExternalCompanyBookings: false
    })
  }
);
