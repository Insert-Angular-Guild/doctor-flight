// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

// dependencies
import { Observable } from 'rxjs';

// facade
import { WeatherFacade } from '../../../../domain/src';

// entity
import { WeatherStatus } from '../../../../domain/src/lib/entities/weather.response';

// shared
import { ShadowDirective } from '@shared/util-styling-directives';
import {
  ExampleWidgetComponent,
  SharedUiWidgetComponent
} from '@shared/ui-widget';

@Component({
  selector: 'example-widget-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    ShadowDirective,
    ExampleWidgetComponent,
    SharedUiWidgetComponent
  ],
  templateUrl: './weather-widget-list-container.component.html',
  styleUrls: ['./weather-widget-list-container.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeatherWidgetListComponentContainer implements OnInit {
  status$: Observable<WeatherStatus> = this.facade.status$;
  constructor(private facade: WeatherFacade) {}

  ngOnInit(): void {
    this.facade.loadStatus();
  }
}
