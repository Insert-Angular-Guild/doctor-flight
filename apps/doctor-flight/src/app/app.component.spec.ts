// angular
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// doctor-flight
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule]
    }).compileComponents();
  });
});
