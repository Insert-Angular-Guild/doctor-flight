// angular
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// dependencies
import { Observable } from 'rxjs';

// entity
import { WeatherStatus, Wind } from '../entities/weather.response';

// shared
import { log } from '@shared/util-rxjs-custom-operators';

const WEATHER_URL = '/api/weather/';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http: HttpClient = inject(HttpClient);

  status(): Observable<WeatherStatus> {
    return this.http
      .get<WeatherStatus>(`${WEATHER_URL}status`)
      .pipe((weatherStatus$) =>
        log(weatherStatus$, 'WeatherService:::status()')
      );
  }

  wind(): Observable<Wind> {
    return this.http.get<Wind>(`${WEATHER_URL}wind`);
  }
}
