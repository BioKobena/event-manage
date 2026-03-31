import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcertComponent } from './concert/concert.component';

export const routes: Routes = [{
    path: "/dashboard",
    component: DashboardComponent
}, {
    path: "/concert",
    component: ConcertComponent
}];
