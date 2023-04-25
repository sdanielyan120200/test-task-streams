import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomNum!: Observable<number>;

  constructor(private appService: AppService) { }

  onUpdate() {
    this.randomNum = this.appService.fetchData();
  }
}
