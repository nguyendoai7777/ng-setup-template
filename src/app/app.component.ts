import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent],
	template: `
		<home />
		<img src="/icons/fb.svg" />

		<pre i18n>ng Localize</pre>

		<router-outlet />
	`
})
export class AppComponent {}
