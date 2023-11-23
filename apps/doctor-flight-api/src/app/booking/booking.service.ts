import { Injectable } from '@nestjs/common';
import { Booking } from './booking.model';
import { bookingData } from './booking.data';

@Injectable()
export class BookingService {
  findAll(): Booking[] {
    return bookingData;
  }
}
