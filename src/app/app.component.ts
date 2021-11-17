import { Component } from '@angular/core';
import { DataService } from './providers/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private data: DataService
  ) {
  }
}
