// angular
import { Injectable, Injector } from '@angular/core';

// dependencies
import { Observable } from 'rxjs';

// entity
import { BookingResponse } from '../entities/booking.response';

// config
import { BOOKING_CONFIG } from '../config/booking.config';

// infrastructure
import { BookingDefaultService } from './booking.default.service';
import { BookingHiddenExternalService } from './booking.hidden-external.service';

export function bookingFactory(injector: Injector): BookingService {
  return injector.get(BOOKING_CONFIG).hideExternalCompanyBookings
    ? injector.get(BookingHiddenExternalService)
    : injector.get(BookingDefaultService);
}

@Injectable({
  providedIn: 'root',
  useFactory: bookingFactory,
  deps: [Injector]
})
export abstract class BookingService {
  abstract findAll(): Observable<BookingResponse[]>;
}
