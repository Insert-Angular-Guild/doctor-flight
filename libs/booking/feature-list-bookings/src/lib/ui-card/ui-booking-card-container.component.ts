// angular
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// shared
import { UICardComponent } from '@shared/ui-card';
import { SharedUICommercialContainerComponent } from '@shared/ui-commercial';

@Component({
  selector: 'booking-ui-card',
  standalone: true,
  imports: [
    CommonModule,
    SharedUICommercialContainerComponent,
    UICardComponent,
    NgOptimizedImage
  ],
  templateUrl: './ui-booking-card-container.component.html',
  styleUrls: ['./ui-booking-card-container.component.scss']
})
export class UIBookingCardComponent {
  additions: string[] = ['playstation', 'netflix'];

  mapToPath(iconName: string): string {
    return `/assets/${iconName}.svg`;
  }
}
