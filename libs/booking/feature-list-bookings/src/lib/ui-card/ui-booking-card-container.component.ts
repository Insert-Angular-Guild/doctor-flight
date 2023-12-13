// angular
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// shared
import { UICardComponent, SharedUICommercialComponent } from '@shared/ui-card';

@Component({
  selector: 'booking-ui-card',
  standalone: true,
  imports: [
    CommonModule,
    SharedUICommercialComponent,
    UICardComponent,
    NgOptimizedImage
  ],
  templateUrl: './ui-booking-card-container.component.html',
  styleUrls: ['./ui-booking-card-container.component.scss']
})
export class UIBookingCardComponent {}
