// angular
import { Component, ContentChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// config
import { Widget, WIDGET } from '../config/widget.token';

@Component({
  selector: 'shared-ui-widget',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './shared-ui-widget.component.html',
  styleUrls: ['./shared-ui-widget.component.scss']
})
export class SharedUiWidgetComponent implements OnInit {
  @ContentChild(WIDGET as never, { static: true })
  widget!: Widget;

  ngOnInit(): void {
    this.widget?.load();
  }

  onRefresh(): void {
    this.widget?.refresh();
  }
}
