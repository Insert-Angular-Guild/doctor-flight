// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// dependencies
import { Observable } from 'rxjs';

// config
import { Widget, WIDGET } from '../config/widget.token';

// entities
import { WeatherFacade, Snowfall } from '@weather';

@Component({
  selector: 'snowfall-widget-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snowfall-widget.component.html',
  styleUrls: ['./snowfall-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: SnowfallWidgetComponent
    }
  ]
})
export class SnowfallWidgetComponent implements Widget {
  snowfall$: Observable<Snowfall> = this.facade.snowfall$;

  constructor(private facade: WeatherFacade) {}

  load(): void {
    this.facade.loadSnowfall();
  }

  refresh(): void {
    this.load();
  }
}
