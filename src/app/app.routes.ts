import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'details/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/detail/detail').then((m) => m.Detail),
  },
  {
    path: 'contact',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
