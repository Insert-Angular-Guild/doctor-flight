import { Controller, Get } from '@nestjs/common';

import { WeatherService } from './weather.service';

const URL = '/weather';

@Controller()
export class WeatherController {
  constructor(private readonly service: WeatherService) {}

  @Get(`${URL}/status`)
  status() {
    return this.service.status();
  }

  @Get(`${URL}/wind`)
  wind() {
    return this.service.wind();
  }

  @Get(`${URL}/temperature`)
  temperature() {
    return this.service.temperature();
  }

  @Get(`${URL}/rainfall`)
  rainfall() {
    return this.service.rainfall();
  }

  @Get(`${URL}/pressure`)
  pressure() {
    return this.service.pressure();
  }

  @Get(`${URL}/hail`)
  hail() {
    return this.service.hail();
  }

  @Get(`${URL}/snowfall`)
  snowfall() {
    return this.service.snowfall();
  }
}
