import { Module } from '@nestjs/common';

import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { CommercialController } from './commercial/commercial.controller';
import { CommercialService } from './commercial/commercial.service';

@Module({
  imports: [],
  controllers: [BookingController, CommercialController],
  providers: [BookingService, CommercialService]
})
export class AppModule {}
