// angular
import { Component, OnInit } from '@angular/core';

// dependencies
import { Observable } from 'rxjs';

// domain
import { BookingData, BookingFacade } from '@booking/domain';

// shared
import { log } from '@shared/util-rxjs-custom-operators';

@Component({
  selector: 'booking-feature-list',
  standalone: true,
  imports: [],
  templateUrl: './booking-feature-list.component.html',
  styleUrls: ['./booking-feature-list.component.scss']
})
export class BookingFeatureListComponent implements OnInit {
  bookings$: Observable<BookingData> = this.facade.bookings$;

  constructor(private facade: BookingFacade) {}

  ngOnInit(): void {
    this.facade.findAll();
    this.bookings$
      .pipe((bookingData: Observable<BookingData>) =>
        log(bookingData, 'BookingFeatureListComponent::ngOnInit')
      )
      .subscribe();
  }
}
