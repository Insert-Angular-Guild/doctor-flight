// angular
import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// config
import { WIDGET_BUTTON, WidgetButton } from '../config/widget-button.token';
import { RefreshButtonDirective } from '../config/refresh-button.directive';

@Component({
  selector: 'widget-refresh-button',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RefreshButtonDirective
  ],
  templateUrl: './widget-refresh-button.component.html',
  styleUrls: ['./widget-refresh-button.component.scss'],
  providers: [
    {
      provide: WIDGET_BUTTON,
      useExisting: WidgetRefreshButtonComponent
    }
  ]
})
export class WidgetRefreshButtonComponent implements WidgetButton, OnInit {
  @ViewChild(RefreshButtonDirective, { static: true })
  refreshButtonDirective!: RefreshButtonDirective;

  @Output()
  refresh: EventEmitter<void> = new EventEmitter<void>();

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.refreshBtnListener();
  }

  private refreshBtnListener(): void {
    this.refreshButtonDirective.refresh
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refresh.emit());
  }
}
