// angular
import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// dependencies
import { Subscription } from 'rxjs';

// config
import { Widget, WIDGET } from '../config/widget.token';
import { WIDGETBUTTON, WidgetButton } from '../config/widget-button.token';

@Component({
  selector: 'shared-ui-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-widget.component.html',
  styleUrls: ['./shared-ui-widget.component.scss']
})
export class SharedUiWidgetComponent implements OnInit, OnDestroy {
  @ContentChild(WIDGET as never, { static: true })
  widget!: Widget;

  @ContentChild(WIDGETBUTTON as never, { static: true })
  widgetButton!: WidgetButton;

  private subscription = new Subscription();

  ngOnInit(): void {
    this.widget?.load();
    this.onRefresh();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRefresh(): void {
    this.subscription.add(
      this.widgetButton?.refreshBtn
        .pipe()
        .subscribe(() => this.widget?.refresh())
    );
  }
}
