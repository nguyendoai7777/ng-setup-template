import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TadaComponent } from '@components/tada/tada.component';

@Component({
	selector: 'main-layout',
	standalone: true,
	imports: [RouterOutlet, TadaComponent, MatAnchor, RouterLink],
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
		<div class="grid grid-cols-2">
			<tada data="123" [(newModel)]="value" />
		</div>
		<router-outlet />
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {
	value = '';
}
