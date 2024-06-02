import { ChangeDetectionStrategy, Component, ElementRef, input, model, viewChild } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'tada',
	standalone: true,
	imports: [MatButton, MatAnchor, RouterLinkActive, RouterLink],
	templateUrl: './tada.component.html',
	styleUrl: './tada.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TadaComponent {
	data = input.required<string>(); // thay cho ở dưới, tuương tự với output
	btnRef = viewChild.required<ElementRef<HTMLElement>>('btnRef');
	newModel = model(''); // thay thế [(ngModel)] => k import FormsModule
}
