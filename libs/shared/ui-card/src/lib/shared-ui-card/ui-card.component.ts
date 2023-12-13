// angular
import { Component, ContentChild, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// config
import { Commercial, COMMERCIAL } from '../config/commercial.config';

@Component({
  selector: 'shared-ui-card',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UICardComponent implements OnInit {
  @ContentChild(COMMERCIAL as never, { static: true })
  commercial!: Commercial;

  ngOnInit() {
    this.commercial?.load();
  }

  onRefresh() {
    this.commercial?.refresh();
  }
}
