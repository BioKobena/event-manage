// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Concert } from '../models/concert.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private ticketsSubject: BehaviorSubject<Ticket[]>;
  public tickets: Observable<Ticket[]>;

  private mockTickets: Ticket[] = [];

  constructor() {
    this.ticketsSubject = new BehaviorSubject<Ticket[]>(this.mockTickets);
    this.tickets = this.ticketsSubject.asObservable();
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.tickets;
  }

  getTicketsByClient(clientId: number): Ticket[] {
    return this.ticketsSubject.value.filter(t => t.client?.id === clientId);
  }

  addTicket(ticket: Ticket): void {
    const tickets = this.ticketsSubject.value;
    ticket.id = Math.max(...tickets.map(t => t.id || 0), 0) + 1;
    this.ticketsSubject.next([...tickets, ticket]);
  }

  reserveTicket(concert: Concert, client: Client, prix: number): Ticket {
    const ticket = new Ticket({
      prix: prix,
      concert: concert,
      client: client
    });
    this.addTicket(ticket);
    return ticket;
  }

  deleteTicket(id: number): void {
    const tickets = this.ticketsSubject.value.filter(t => t.id !== id);
    this.ticketsSubject.next(tickets);
  }

  getTotalRevenue(): number {
    return this.ticketsSubject.value.reduce((sum, ticket) => sum + ticket.prix, 0);
  }
}
