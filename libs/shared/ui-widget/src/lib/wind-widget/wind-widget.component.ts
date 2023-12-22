// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// dependencies
import { Observable } from 'rxjs';

// config
import { WIDGET, Widget } from '../config/widget.token';

// entities
import { WeatherFacade, Wind } from '@weather';

@Component({
  selector: 'wind-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wind-widget.component.html',
  styleUrls: ['./wind-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WindWidgetComponent
    }
  ]
})
export class WindWidgetComponent implements Widget {
  windData$: Observable<Wind> = this.facade.windData$;

  constructor(private facade: WeatherFacade) {}

  load(): void {
    this.facade.loadWind();
  }

  refresh(): void {
    this.load();
  }
}
