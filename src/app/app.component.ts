import { Component, ViewEncapsulation } from '@angular/core';
import { StyleService } from './_shared/services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'single-self-certification';
  constructor() {}

}
