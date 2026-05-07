import { Routes } from '@angular/router';
import { AuthGuard } from '@guards';
import { AuthLayout } from '@layouts/auth';
import { MainLayout } from '@layouts/main';

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
