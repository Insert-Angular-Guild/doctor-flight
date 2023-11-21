// angular
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy
} from '@angular/core';
import { RouterModule } from '@angular/router';

// side navigation
import {
  FeatureSideNavigationComponent,
  SideNavigationService
} from '@shared/feature-side-navigation';

// doctor-flight
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  standalone: true,
  imports: [RouterModule, FeatureSideNavigationComponent],
  selector: 'doctor-flight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  constructor(
    public sidenavService: SideNavigationService,
    private cdr: ChangeDetectorRef
  ) {}
  ngAfterViewInit(): void {
    this.sidenavService.push(NavigationComponent);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }
}
