// angular
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-feature-side-navigation-ui-link',
  templateUrl: './ui-link.component.html',
  styleUrls: ['./ui-link.component.scss'],
  imports: [RouterLinkActive, RouterLink],
  standalone: true
})
export class SideNavigationUILinkComponent {
  @Input()
  routerLink = '';

  @Input()
  routerLinkActiveOptions: { exact: boolean } = { exact: true };
}
