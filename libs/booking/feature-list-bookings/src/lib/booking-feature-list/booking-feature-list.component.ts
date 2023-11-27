// angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

// dependencies
import { Observable } from 'rxjs';

// domain
import { Booking, BookingFacade } from '@booking/domain';

// shared
import { log } from '@shared/util-rxjs-custom-operators';

// ui
import { UICardComponent } from '../ui-card/ui-card.component';

@Component({
  selector: 'booking-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, UICardComponent],
  templateUrl: './booking-feature-list.component.html',
  styleUrls: ['./booking-feature-list.component.scss']
})
export class BookingFeatureListComponent implements OnInit {
  dataSource$: Observable<Booking[]> = this.facade.bookings$;

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
