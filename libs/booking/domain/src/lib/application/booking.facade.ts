// angular
import { Injectable } from '@angular/core';

// dependencies
import { BehaviorSubject, Observable } from 'rxjs';

// infrastructure
import { BookingService } from '../infrastructure/booking.service';

// entities
import { BookingData } from '../entities/booking.data';
import { BookingResponse } from '../entities/booking.response';

@Injectable({ providedIn: 'root' })
export class BookingFacade {
  private bookingsSubject$ = new BehaviorSubject<BookingData[]>([]);
  bookings$: Observable<BookingData[]> = this.bookingsSubject$.asObservable();

  constructor(private service: BookingService) {}

  findAll(): void {
    this.service
      .findAll()
      .pipe()
      .subscribe({
        next: (ticketList: BookingResponse[]) => {
          this.bookingsSubject$.next(ticketList);
        },
        error: (err) => {
          console.error('err', err);
        }
      });
  }
}
