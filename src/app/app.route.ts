import { Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth/auth.guard';
import { AuthLayout } from '@layouts/auth/auth.layout';
import { MainLayout } from '@layouts/main/main.layout';

export const routes: Routes = [
	{
		path: '',
		component: MainLayout,
		loadChildren: () => import('@layouts/main/main.route')
	},
	{
		path: 'auth',
		component: AuthLayout,
		loadChildren: () => import('@layouts/auth/auth.route'),
		canActivate: [AuthGuard()]
	}
];
