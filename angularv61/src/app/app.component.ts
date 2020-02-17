import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // Melhor performance do que ShadowDom 0
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angularv61';
}
