import { TestBed } from '@angular/core/testing';

import { TestLearnService } from './test-learn.service';

describe('TestLearnService', () => {
	let service: TestLearnService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TestLearnService);
	});

	it('TestLearnService should be created', () => {
		expect(service).toBeTruthy();
	});

	it('is Odd with 3', () => {
		service.isOdd(3).subscribe(val => {
			expect(val).toEqual(true);
		});
	});

	it('is Not Odd with 2', () => {
		service.isOdd(2).subscribe(val => {
			expect(val).toEqual(true);
		});
	});
});
