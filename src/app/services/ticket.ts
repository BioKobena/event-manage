import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, switchMap, tap, of } from 'rxjs';
import { Ticket } from '../models/ticket.model';
import { Concert } from '../models/concert.model';
import { Client } from '../models/client.model';
import { API_BASE_URL } from '../core/api/api.constants';

interface BackendTicket {
  id?: number;
  prix?: number;
  numero?: string;
  concert?: {
    id?: number;
    lieu?: string;
    date?: string;
    genre_musicale?: string;
    description?: string;
    popularite?: number;
    nombre_place?: number;
    prixTicket?: number;
  };
  client?: {
    id?: number;
    nom?: string;
    prenom?: string;
    genre?: string;
    age?: number;
    email?: string;
    compte_bancaire?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private readonly ticketsSubject = new BehaviorSubject<Ticket[]>([]);
  public readonly tickets: Observable<Ticket[]> = this.ticketsSubject.asObservable();
  private readonly baseUrl = `${API_BASE_URL}/tickets`;

  constructor(private readonly http: HttpClient) {}

  private mapConcert(concert?: BackendTicket['concert']): Concert | undefined {
    if (!concert) {
      return undefined;
    }

    return new Concert({
      id: concert.id,
      lieu: concert.lieu ?? '',
      date: concert.date ?? '',
      genre_musicale: concert.genre_musicale ?? '',
      description: concert.description ?? '',
      popularite: concert.popularite ?? 0,
      nombre_place: concert.nombre_place ?? 0,
      prix: concert.prixTicket ?? 0,
    });
  }

  private mapClient(client?: BackendTicket['client']): Client | undefined {
    if (!client) {
      return undefined;
    }

    return new Client({
      id: client.id,
      nom: client.nom ?? '',
      prenom: client.prenom ?? '',
      genre: client.genre ?? '',
      age: client.age ?? 0,
      email: client.email ?? '',
      compte_bancaire: client.compte_bancaire ?? '',
    });
  }

  private mapTicket(ticket: BackendTicket): Ticket {
    return new Ticket({
      id: ticket.id,
      prix: ticket.prix ?? 0,
      concert: this.mapConcert(ticket.concert),
      client: this.mapClient(ticket.client),
    });
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<BackendTicket[]>(`${this.baseUrl}/all`).pipe(
      map((tickets) => tickets.map((ticket) => this.mapTicket(ticket))),
      tap((tickets) => this.ticketsSubject.next(tickets)),
      catchError(() => of(this.ticketsSubject.value))
    );
  }

  getTicketsByConcert(concertId: number): Observable<Ticket[]> {
    return this.http.get<BackendTicket[]>(`${this.baseUrl}/concert/${concertId}`).pipe(
      map((tickets) => tickets.map((ticket) => this.mapTicket(ticket))),
      catchError(() => of([]))
    );
  }

  getTicketsByClient(clientId: number): Observable<Ticket[]> {
    return this.http.get<BackendTicket[]>(`${this.baseUrl}/client/${clientId}`).pipe(
      map((tickets) => tickets.map((ticket) => this.mapTicket(ticket))),
      tap((tickets) => this.ticketsSubject.next(tickets)),
      catchError(() => of(this.ticketsSubject.value.filter((ticket) => ticket.client?.id === clientId)))
    );
  }

  getReservationsByClient(clientId: number): Ticket[] {
    return this.ticketsSubject.value.filter((ticket) => ticket.client?.id === clientId);
  }

  reserveTicket(concert: Concert, client: Client): Observable<Ticket | null> {
    if (!concert.id || !client.id) {
      return of(null);
    }

    return this.getTicketsByConcert(concert.id).pipe(
      switchMap((tickets) => {
        const availableTicket = tickets.find((ticket) => !ticket.client);
        if (!availableTicket?.id) {
          return of(null);
        }

        return this.http
          .put<BackendTicket>(`${this.baseUrl}/buy/${availableTicket.id}/client/${client.id}`, {})
          .pipe(
            map((ticket) => this.mapTicket(ticket)),
            tap(() => {
              this.getAllTickets().subscribe({
                error: () => void 0,
              });
            }),
            catchError(() => of(null))
          );
      })
    );
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      tap(() => {
        this.getAllTickets().subscribe({
          error: () => void 0,
        });
      }),
      catchError(() => of(void 0))
    );
  }

  getTotalRevenue(): number {
    return this.ticketsSubject.value.reduce((sum, ticket) => sum + ticket.prix, 0);
  }
}
