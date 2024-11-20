import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TestLearnService {
	isOdd(num: number) {
		return of(num).pipe(map(n => n % 2 !== 0));
	}
}
