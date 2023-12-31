import { Controller, Get } from '@nestjs/common';

import { BookingService } from './booking.service';

@Controller()
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Get('/bookings')
  getData() {
    return this.service.findAll();
  }
}
