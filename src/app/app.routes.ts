import { Routes } from '@angular/router';
import { Detail } from './pages/detail/detail';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'details/:id',
    component: Detail,
  },
];
