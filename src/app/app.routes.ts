import { Routes } from '@angular/router';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertComponent } from './concert/concert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { guestGuard, roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin', 'user'] }
  },
  {
    path: 'concerts',
    component: ConcertComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin', 'user'] }
  },
  {
    path: 'artistes',
    component: ArtisteComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin', 'user'] }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [roleGuard],
    data: { roles: ['user'] }
  },
  {
    path: 'gestionnaire',
    component: GestionnaireComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  { path: 'admin', redirectTo: 'gestionnaire' },
  { path: 'user', redirectTo: 'concerts' },
  { path: '**', redirectTo: 'dashboard' }
];
