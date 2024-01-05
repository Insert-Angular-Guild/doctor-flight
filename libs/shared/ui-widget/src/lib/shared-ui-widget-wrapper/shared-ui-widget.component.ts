// angular
import {
  Component,
  ContentChild,
  DestroyRef,
  inject,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// config
import { Widget, WIDGET } from '../config/widget.token';
import { WIDGET_BUTTON, WidgetButton } from '../config/widget-button.token';

@Component({
  selector: 'shared-ui-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui-widget.component.html',
  styleUrls: ['./shared-ui-widget.component.scss']
})
export class SharedUiWidgetComponent implements OnInit {
  @ContentChild(WIDGET as never, { static: true })
  widget!: Widget;

  @ContentChild(WIDGET_BUTTON as never, { static: true })
  widgetButton!: WidgetButton;

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.widget?.load();
    this.refreshListener();
  }

  refreshListener(): void {
    this.widgetButton?.refresh
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.widget?.refresh());
  }
}
