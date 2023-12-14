// angular
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

// dependencies
import { Observable } from 'rxjs';

// domain
import { Booking, BookingFacade } from '@booking/domain';

// shared
import { log } from '@shared/util-rxjs-custom-operators';

// ui
import { UIBookingCardComponent } from '../ui-card/ui-booking-card-container.component';

// shared
import {
  ShadowDirective,
  SOLID_100,
  LIGHT_100,
  MEDIUM_100,
  StylingShadow
} from '@shared/util-styling-directives';

@Component({
  selector: 'booking-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    UIBookingCardComponent,
    ShadowDirective
  ],
  templateUrl: './booking-feature-list.component.html',
  styleUrls: ['./booking-feature-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BookingFeatureListComponent implements OnInit {
  dataSource$: Observable<Booking[]> = this.facade.bookings$;

  LIGHT_100: StylingShadow = LIGHT_100;
  MEDIUM_100: StylingShadow = MEDIUM_100;
  SOLID_100: StylingShadow = SOLID_100;

  constructor(private facade: BookingFacade) {}

  ngOnInit(): void {
    this.facade.findAll();
    this.dataSource$
      .pipe((bookingData: Observable<Booking[]>) =>
        log(bookingData, 'BookingFeatureListComponent::ngOnInit')
      )
      .subscribe();
  }
}
