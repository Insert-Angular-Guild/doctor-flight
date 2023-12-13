// angular
import { Injectable } from '@angular/core';

// dependencies
import { BehaviorSubject, Observable } from 'rxjs';

// infrastructure
import { BookingService } from '../infrastructure/booking.service';

// entities
import { Booking, Food } from '../entities/booking';
import {
  BookingResponse,
  NourishmentResponse
} from '../entities/booking.response';

@Injectable({ providedIn: 'root' })
export class BookingFacade {
  private bookingsSubject$ = new BehaviorSubject<Booking[]>([]);
  bookings$: Observable<Booking[]> = this.bookingsSubject$.asObservable();

  constructor(private service: BookingService) {}

  findAll(): void {
    this.service
      .findAll()
      .pipe()
      .subscribe({
        next: (bookingsResponses: BookingResponse[]) => {
          const bookings: Booking[] = bookingsResponses.map(
            (booking: BookingResponse) => this.mapToBooking(booking)
          );
          this.bookingsSubject$.next(bookings);
        },
        error: (err) => {
          console.error('err', err);
        }
      });
  }

  private mapToBooking(booking: BookingResponse): Booking {
    return {
      origin: booking.info.origin,
      destination: booking.info.destination,
      priority: booking.info.priority,
      food: this.mapToFood(booking.nourishment || [])
    };
  }

  private mapToFood(nourishmentResponses: NourishmentResponse[]): Food[] {
    return nourishmentResponses.map(
      (nourishmentResponse: NourishmentResponse) => {
        return {
          name: nourishmentResponse.name,
          calories: nourishmentResponse.calories,
          type: nourishmentResponse.type
        };
      }
    );
  }
}
