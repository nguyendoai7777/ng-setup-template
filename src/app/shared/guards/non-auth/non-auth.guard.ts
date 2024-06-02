import { CanActivateFn } from '@angular/router';

export function NonAuthGuard(): CanActivateFn {
	return (route, state) => {
		return true;
	};
}
