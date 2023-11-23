import { Module } from '@nestjs/common';

import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';

@Module({
  imports: [],
  controllers: [BookingController],
  providers: [BookingService]
})
export class AppModule {}
