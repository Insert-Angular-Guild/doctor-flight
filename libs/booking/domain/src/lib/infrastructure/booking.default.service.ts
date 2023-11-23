// angular
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// dependencies
import { Observable } from 'rxjs';

// infrastructure
import { BookingService } from './booking.service';

// entities
import { BookingResponse } from '../entities/booking.response';

// shared
import { log } from '@shared/util-rxjs-custom-operators';

@Injectable({
  providedIn: 'root'
})
export class BookingDefaultService implements BookingService {
  private http: HttpClient = inject(HttpClient);
  findAll(): Observable<BookingResponse[]> {
    return this.http
      .get<BookingResponse[]>('/api/bookings')
      .pipe((bookingResponse$) =>
        log(bookingResponse$, 'BookingDefaultService:::findAll()')
      );
  }
}
