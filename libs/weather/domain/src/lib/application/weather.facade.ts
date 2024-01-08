// angular
import { Injectable } from '@angular/core';

// dependencies
import { BehaviorSubject, Observable } from 'rxjs';

// infrastructure
import { WeatherService } from '../infrastructure/weather.service';

// entities
import { WeatherStatus, Snowfall } from '../entities/weather.response';
import { UISnowfall } from '../entities/weather';

@Injectable({ providedIn: 'root' })
export class WeatherFacade {
  private statusSubject$ = new BehaviorSubject<WeatherStatus>({
    status: 'LOADING'
  });
  status$: Observable<WeatherStatus> = this.statusSubject$.asObservable();

  private snowfallSubject$ = new BehaviorSubject<Snowfall>({
    amount: {
      value: 0,
      unit: 'cm'
    },
    intensity: 'light',
    type: 'powdery',
    accumulation: {
      value: 0,
      unit: 'cm'
    }
  });
  snowfall$: Observable<Snowfall> = this.snowfallSubject$.asObservable();

  constructor(private service: WeatherService) {}

  loadStatus(): void {
    this.service
      .status()
      .pipe()
      .subscribe({
        next: (status: WeatherStatus): void => this.statusSubject$.next(status),
        error: this.logError()
      });
  }

  loadSnowfall(): void {
    this.service
      .snowfall()
      .pipe()
      .subscribe({
        next: (snowfall: Snowfall): void =>
          this.snowfallSubject$.next(this.mapToUISnowfall(snowfall)),
        error: this.logError()
      });
  }

  private logError() {
    return (err: Error): void => console.error('err', err);
  }

  private mapToUISnowfall(snowfall: Snowfall): UISnowfall {
    return {
      amount: {
        value: snowfall.amount.value,
        unit: snowfall.amount.unit
      },
      intensity: snowfall.intensity,
      type: snowfall.type,
      accumulation: {
        value: snowfall.accumulation.value,
        unit: snowfall.accumulation.unit
      }
    };
  }
}
