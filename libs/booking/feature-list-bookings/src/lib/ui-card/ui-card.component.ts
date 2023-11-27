// angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// ui
import { UIFlightComponent } from '../ui-flight/ui-flight.component';
import { UIFoodComponent } from '../ui-food/ui-food.component';

// model
import { BookingCardUI } from '../model/booking-card.ui.model';

@Component({
  selector: 'booking-ui-card',
  standalone: true,
  imports: [CommonModule, UIFlightComponent, UIFoodComponent],
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UICardComponent {
  @Input()
  ui: BookingCardUI;
}
