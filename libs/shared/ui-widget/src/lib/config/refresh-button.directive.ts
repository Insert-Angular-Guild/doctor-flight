// angular
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[refreshBtn]',
  standalone: true
})
export class RefreshButtonDirective {
  @Output()
  refresh = new EventEmitter<void>();

  @HostListener('click', ['$event']) onClick(): void {
    this.refresh.emit();
  }
}
