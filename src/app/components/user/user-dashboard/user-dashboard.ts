import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { TicketService } from '../../../services/ticket';
import { Client } from '../../../models/client.model';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboardComponent implements OnInit {
  currentUser: Client | null = null;
  userReservations: Ticket[] = [];
  totalSpent: number = 0;

  constructor(
    private authService: AuthService,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn() || this.authService.userRoleValue !== 'user') {
      this.router.navigate(['/login']);
      return;
    }

    this.currentUser = this.authService.currentUserValue as Client;
    this.loadUserReservations();
  }

  loadUserReservations(): void {
    if (this.currentUser && this.currentUser.id) {
      this.userReservations = this.ticketService.getReservationsByClient(this.currentUser.id);
      this.totalSpent = this.userReservations.reduce((sum, ticket) => sum + ticket.prix, 0);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/concerts']);
  }

  goToConcerts(): void {
    this.router.navigate(['/concerts']);
  }
}