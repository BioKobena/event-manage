import { Routes } from '@angular/router';
import { authRoleGuard } from './core/guards/auth-role.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'concerts' },
  {
    path: 'concerts',
    loadComponent: () =>
      import('./components/user/concert-catalog/concert-catalog').then(
        (m) => m.ConcertCatalogComponent
      )
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login').then((m) => m.LoginComponent)
  },
  {
    path: 'admin',
    canMatch: [authRoleGuard],
    data: { roles: ['admin'] },
    loadComponent: () =>
      import('./components/admin/admin-dashboard/admin-dashboard').then(
        (m) => m.AdminDashboardComponent
      )
  },
  {
    path: 'user/dashboard',
    canMatch: [authRoleGuard],
    data: { roles: ['user'] },
    loadComponent: () =>
      import('./components/user/user-dashboard/user-dashboard').then(
        (m) => m.UserDashboardComponent
      )
  },
  { path: 'user/concerts', redirectTo: 'concerts' },
  { path: '**', redirectTo: 'concerts' }
];
