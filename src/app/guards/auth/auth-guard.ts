import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = typeof localStorage !== 'undefined' && localStorage.getItem('userLoged');
  if (!user) {
    const router = inject(Router);
    router.navigate(['']);
  }
  return !!user;
};
