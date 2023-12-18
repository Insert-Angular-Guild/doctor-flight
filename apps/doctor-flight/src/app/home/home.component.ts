// angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// side-navigation
import { SideNavigationUIScreenComponent } from '@shared/feature-side-navigation';

// navigation
import { NavigationComponent } from '../navigation/navigation.component';

// shared
import { ShadowDirective } from '@shared/util-styling-directives';

@Component({
  selector: 'doctor-flight-home',
  standalone: true,
  imports: [
    CommonModule,
    SideNavigationUIScreenComponent,
    SideNavigationUIScreenComponent,
    ShadowDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly NavigationComponent = NavigationComponent;
}
