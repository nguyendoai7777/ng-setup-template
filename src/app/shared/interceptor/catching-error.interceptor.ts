import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export function catchingErrorInterceptor(): HttpInterceptorFn {
	return (req, next) => {
		// your interceptor
		/**
		 * global handle error when use http request here
		 *
		 * */
		return next(req).pipe(catchError(() => of()));
	};
}
