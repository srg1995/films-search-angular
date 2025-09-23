import { Routes } from '@angular/router';
import { Detail } from './pages/detail/detail';
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
    data: { role: 'userLoged' },
    loadComponent: () => import('./pages/detail/detail').then((m) => m.Detail),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
