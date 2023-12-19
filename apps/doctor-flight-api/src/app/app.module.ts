import { Module } from '@nestjs/common';

import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { CommercialController } from './commercial/commercial.controller';
import { CommercialService } from './commercial/commercial.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [],
  controllers: [BookingController, CommercialController, WeatherController],
  providers: [BookingService, CommercialService, WeatherService]
})
export class AppModule {}
