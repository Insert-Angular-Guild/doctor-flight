// angular
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidenavContentArea]',
  standalone: true
})
export class SideNavigationContentAreaDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
