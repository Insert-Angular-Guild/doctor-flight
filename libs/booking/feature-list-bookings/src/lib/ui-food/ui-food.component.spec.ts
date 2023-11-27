import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIFoodComponent } from './ui-food.component';

describe('UiFoodComponent', () => {
  let component: UIFoodComponent;
  let fixture: ComponentFixture<UIFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIFoodComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UIFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
