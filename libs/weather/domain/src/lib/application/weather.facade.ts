// angular
import { Injectable, OnInit } from '@angular/core';

// dependencies
import { BehaviorSubject, Observable } from 'rxjs';

// infrastructure
import { WeatherService } from '../infrastructure/weather.service';

// entities
import { WeatherStatus } from '../entities/weather.response';

@Injectable({ providedIn: 'root' })
export class WeatherFacade implements OnInit {
  private statusSubject$ = new BehaviorSubject<WeatherStatus>({
    status: 'UNKNOWN'
  });
  status$: Observable<WeatherStatus> = this.statusSubject$.asObservable();

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.service
      .status()
      .pipe()
      .subscribe({
        next: (status: WeatherStatus): void => this.statusSubject$.next(status),
        error: (err): void => console.error('err', err)
      });
  }
}
