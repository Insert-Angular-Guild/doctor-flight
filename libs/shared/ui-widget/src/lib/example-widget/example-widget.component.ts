// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// config
import { WIDGET, Widget } from '../config/widget.token';

@Component({
  selector: 'example-widget-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-widget.component.html',
  styleUrls: ['./example-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: ExampleWidgetComponent
    }
  ]
})
export class ExampleWidgetComponent implements Widget {
  load(): void {
    console.log('load called');
  }

  refresh(): void {
    console.log('load called');
  }
}
