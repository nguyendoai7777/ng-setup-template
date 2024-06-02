import { HttpInterceptorFn } from '@angular/common/http';

export function interceptor(): HttpInterceptorFn {
	return (req, next) => {
		// your interceptor
		/**
		 * attach token
		 * transform url, base url,
		 * ...etc
		 *
		 * */
		return next(req);
	};
}
