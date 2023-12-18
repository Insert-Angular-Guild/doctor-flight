import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedUiWidgetComponent } from './shared-ui-widget.component';

describe('SharedUiWidgetComponent', () => {
  let component: SharedUiWidgetComponent;
  let fixture: ComponentFixture<SharedUiWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUiWidgetComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
