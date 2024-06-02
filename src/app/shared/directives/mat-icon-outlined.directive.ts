import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
	selector: 'mat-icon[outlined]',
	standalone: true
})
export class MatIconOutlinedDirective {
	readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
	readonly rd2 = inject(Renderer2);
	constructor() {
		// this.rd2.createText()
	}
	ngAfterViewInit() {}
}
