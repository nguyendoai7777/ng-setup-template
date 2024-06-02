import { CanActivateFn } from '@angular/router';

export function AuthGuard(): CanActivateFn {
	return (route, state) => {
		return true;
	};
}
