import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard';
import { ConcertCatalogComponent } from './components/user/concert-catalog/concert-catalog';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'concerts' },
  { path: 'concerts', component: ConcertCatalogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'user/concerts', redirectTo: 'concerts' },
  { path: '**', redirectTo: 'concerts' }
];
