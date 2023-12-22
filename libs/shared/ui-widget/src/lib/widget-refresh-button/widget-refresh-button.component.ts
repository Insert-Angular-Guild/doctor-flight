// angular
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// dependencies
import { Subscription } from 'rxjs';

// config
import { WIDGETBUTTON, WidgetButton } from '../config/widget-button.token';
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
      provide: WIDGETBUTTON,
      useExisting: WidgetRefreshButtonComponent
    }
  ]
})
export class WidgetRefreshButtonComponent
  implements WidgetButton, OnInit, OnDestroy
{
  @ViewChild(RefreshButtonDirective, { static: true })
  refreshButtonDirective!: RefreshButtonDirective;

  @Output()
  refreshBtn: EventEmitter<void> = new EventEmitter<void>();

  private subscription = new Subscription();

  ngOnInit(): void {
    this.refreshBtnListener();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private refreshBtnListener(): void {
    this.subscription.add(
      this.refreshButtonDirective.refreshButton
        .pipe()
        .subscribe(() => this.refreshBtn.emit())
    );
  }
}
