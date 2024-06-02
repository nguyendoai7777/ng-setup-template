import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'listener',
	standalone: true,
	imports: [],
	templateUrl: './listener.component.html',
	styleUrl: './listener.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListenerComponent {}
