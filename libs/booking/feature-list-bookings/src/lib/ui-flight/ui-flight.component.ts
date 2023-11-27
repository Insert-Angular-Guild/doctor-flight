// angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// model
import { FlightUI } from '../model/booking-card.ui.model';

@Component({
  selector: 'booking-ui-flight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-flight.component.html',
  styleUrls: ['./ui-flight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIFlightComponent {
  @Input()
  ui!: FlightUI;
}
