import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { Ticket } from '../core/models/ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly ticketApi: TicketApiService,
    readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    const session = this.auth.currentSession;

    if (!session || session.role !== 'user') {
      this.isLoading = false;
      this.errorMessage = 'Cet espace est réservé aux utilisateurs connectés.';
      return;
    }

    this.ticketApi.getByClient(session.id).subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger vos billets pour le moment.';
        this.isLoading = false;
      }
    });
  }
}
