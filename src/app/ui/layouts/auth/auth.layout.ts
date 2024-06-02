import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'auth-layout',
	standalone: true,
	imports: [RouterOutlet],
	template: `
		<div>Auth layout</div>
		<router-outlet />
	`,
	styles: ``
})
export class AuthLayout {}
