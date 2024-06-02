import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'instead',
	standalone: true,
	imports: [],
	templateUrl: './instead.component.html',
	styleUrl: './instead.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InsteadComponent {}
