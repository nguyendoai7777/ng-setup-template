import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, MatAnchor, RouterLink, MatButton],
  template: `
    <h3 class="flex text-red-600">Navbar</h3>
    <div class="navbar">
      <div class="flex gap-4">
        <a mat-stroked-button routerLink="instead">
          <span i18n>instead</span>
        </a>
        <a mat-stroked-button routerLink="listener">
          <span i18n>listener</span>
        </a>
      </div>
    </div>
    <div class="">Main layout = {{ value }}</div>
    <div class="grid grid-cols-2"></div>
    <router-outlet />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {
  value = '';
}
