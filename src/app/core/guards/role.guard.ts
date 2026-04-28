import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/auth-session.model';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const session = auth.currentSession;
  const allowedRoles = (route.data['roles'] as UserRole[] | undefined) ?? [];

  if (!session) {
    return router.parseUrl('/login');
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(session.role)) {
    return router.parseUrl(session.role === 'admin' ? '/gestionnaire' : '/concerts');
  }

  return true;
};

export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.currentSession) {
    return router.parseUrl('/dashboard');
  }

  return true;
};
