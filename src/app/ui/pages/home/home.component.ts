import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
