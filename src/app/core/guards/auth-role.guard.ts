import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../../services/auth';

type AllowedRole = 'admin' | 'user';

export const authRoleGuard: CanMatchFn = (route: Route, _segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = (route.data?.['roles'] as AllowedRole[] | undefined) ?? [];

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  const currentRole = authService.userRoleValue;
  if (allowedRoles.length > 0 && (!currentRole || !allowedRoles.includes(currentRole))) {
    return router.createUrlTree([authService.isAdmin() ? '/admin' : '/concerts']);
  }

  return true;
};
