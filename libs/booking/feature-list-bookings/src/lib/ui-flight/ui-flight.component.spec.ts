import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIFlightComponent } from './ui-flight.component';

describe('UiFlightInformationsComponent', () => {
  let component: UIFlightComponent;
  let fixture: ComponentFixture<UIFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIFlightComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UIFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
