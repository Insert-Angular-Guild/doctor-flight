import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingFeatureListComponent } from './booking-feature-list.component';

describe('BookingFeatureListBookingsComponent', () => {
  let component: BookingFeatureListComponent;
  let fixture: ComponentFixture<BookingFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFeatureListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
