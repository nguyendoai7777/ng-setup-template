import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsteadComponent } from './instead.component';

describe('InsteadComponent', () => {
	let component: InsteadComponent;
	let fixture: ComponentFixture<InsteadComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [InsteadComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(InsteadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
