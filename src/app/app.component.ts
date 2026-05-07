import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '@pages/home';
import { SeoService } from '@seo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, MatButton],
  template: `
    <button mat-button (click)="setCount()">TEST live Count {{ count }}</button>
    <home />
    <img src="/icons/fb.svg" alt="" />

    <pre i18n>ng Localize</pre>

    <router-outlet />
  `
})
export class AppComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.updateMeta({
      description: 'Home page'
    });
  }

  count = 1;
  setCount() {
    this.count += 1;
  }
}
