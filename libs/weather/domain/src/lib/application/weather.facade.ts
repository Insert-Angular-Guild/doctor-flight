// angular
import { Injectable } from '@angular/core';

// dependencies
import { BehaviorSubject, Observable } from 'rxjs';

// infrastructure
import { WeatherService } from '../infrastructure/weather.service';

// entities
import { WeatherStatus, Wind } from '../entities/weather.response';

@Injectable({ providedIn: 'root' })
export class WeatherFacade {
  private statusSubject$ = new BehaviorSubject<WeatherStatus>({
    status: 'LOADING'
  });
  status$: Observable<WeatherStatus> = this.statusSubject$.asObservable();

  private windDataSubject$ = new BehaviorSubject<Wind>({
    speed: {
      value: 0,
      unit: 'm/s'
    },
    direction: {
      degrees: 0,
      cardinalDirection: 'N'
    }
  });
  windData$: Observable<Wind> = this.windDataSubject$.asObservable();

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

  loadWind(): void {
    this.service
      .wind()
      .pipe()
      .subscribe({
        next: (wind: Wind): void => this.windDataSubject$.next(wind),
        error: this.logError()
      });
  }

  private logError() {
    return (err: Error): void => console.error('err', err);
  }
}
