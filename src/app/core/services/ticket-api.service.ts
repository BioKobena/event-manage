import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../api/api.constants';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_ENDPOINTS.ticket}/all`);
  }

  getByClient(clientId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_ENDPOINTS.ticket}/client/${clientId}`);
  }

  getByConcert(concertId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${API_ENDPOINTS.ticket}/concert/${concertId}`);
  }

  buy(ticketId: number, clientId: number): Observable<Ticket> {
    return this.http.put<Ticket>(`${API_ENDPOINTS.ticket}/buy/${ticketId}/client/${clientId}`, {});
  }

  delete(ticketId: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.ticket}/delete/${ticketId}`);
  }
}
