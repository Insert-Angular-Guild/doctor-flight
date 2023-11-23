import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingFeatureListComponent } from './booking-feature-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('BookingFeatureListBookingsComponent', () => {
  let component: BookingFeatureListComponent;
  let fixture: ComponentFixture<BookingFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingFeatureListComponent],
      providers: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
