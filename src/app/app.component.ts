import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MatButton],
  template: `
    <button mat-button (click)="setCount()">TEST live Count {{ count }}</button>
    <home />
    <img src="/icons/fb.svg" />

    <pre i18n>ng Localize</pre>

    <router-outlet />
  `
})
export class AppComponent {
  count = 1;
  setCount() {
    this.count += 1;
  }
}
