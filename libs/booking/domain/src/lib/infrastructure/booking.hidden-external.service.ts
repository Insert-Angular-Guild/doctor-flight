// angular
import { Injectable } from '@angular/core';

// dependencies
import { from, Observable } from 'rxjs';

// infrastructure
import { BookingService } from './booking.service';

// entities
import { BookingResponse } from '../entities/booking.response';

@Injectable({
  providedIn: 'root'
})
export class BookingHiddenExternalService implements BookingService {
  findAll(): Observable<BookingResponse[]> {
    return from([]);
  }
}
