import { Injectable } from '@nestjs/common';
import {
  Hail,
  Pressure,
  Rainfall,
  Snowfall,
  Temperature,
  WeatherStatus,
  Wind
} from './weather.model';
import {
  hail,
  pressure,
  rainfall,
  snowfall,
  temperature,
  wind
} from './weather.data';

@Injectable()
export class WeatherService {
  status(): WeatherStatus {
    return { status: 'LIVE', date: new Date() };
  }

  wind(): Wind {
    return wind;
  }

  temperature(): Temperature {
    return temperature;
  }

  rainfall(): Rainfall {
    return rainfall;
  }

  pressure(): Pressure {
    return pressure;
  }

  hail(): Hail {
    return hail;
  }

  snowfall(): Snowfall {
    return snowfall;
  }
}
