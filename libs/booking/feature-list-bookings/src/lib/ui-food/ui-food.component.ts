// angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// model
import { FoodUI } from '../model/booking-card.ui.model';

@Component({
  selector: 'booking-ui-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-food.component.html',
  styleUrls: ['./ui-food.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIFoodComponent {
  @Input()
  ui!: FoodUI;
}
