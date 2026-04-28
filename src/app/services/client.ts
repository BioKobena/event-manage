import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Client } from '../models/client.model';
import { API_BASE_URL } from '../core/api/api.constants';

interface BackendClient {
  id?: number;
  nom?: string;
  prenom?: string;
  genre?: string;
  age?: number;
  email?: string;
  compte_bancaire?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly clientsSubject = new BehaviorSubject<Client[]>([]);
  public readonly clients: Observable<Client[]> = this.clientsSubject.asObservable();
  private readonly baseUrl = `${API_BASE_URL}/client`;

  constructor(private readonly http: HttpClient) {}

  private mapClient(client: BackendClient): Client {
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

  private toPayload(client: Client): BackendClient {
    return {
      nom: client.nom,
      prenom: client.prenom,
      genre: client.genre,
      age: client.age,
      email: client.email,
      compte_bancaire: client.compte_bancaire,
    };
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<BackendClient[]>(`${this.baseUrl}/all`).pipe(
      map((clients) => clients.map((client) => this.mapClient(client))),
      tap((clients) => this.clientsSubject.next(clients)),
      catchError(() => of(this.clientsSubject.value))
    );
  }

  getClientById(id: number): Client | undefined {
    return this.clientsSubject.value.find((client) => client.id === id);
  }

  addClient(client: Client): Observable<Client[]> {
    return this.http.post<BackendClient[]>(this.baseUrl, this.toPayload(client)).pipe(
      map((clients) => clients.map((item) => this.mapClient(item))),
      tap((clients) => this.clientsSubject.next(clients)),
      catchError(() => of(this.clientsSubject.value))
    );
  }

  updateClient(client: Client): Observable<Client> {
    if (!client.id) {
      throw new Error('Client ID is required for update');
    }

    return this.http.put<BackendClient>(`${this.baseUrl}/update/${client.id}`, this.toPayload(client)).pipe(
      map((item) => this.mapClient(item)),
      tap((updatedClient) => {
        const nextClients = this.clientsSubject.value.map((current) =>
          current.id === updatedClient.id ? updatedClient : current
        );
        this.clientsSubject.next(nextClients);
      }),
      catchError(() => of(client))
    );
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      tap(() => {
        const nextClients = this.clientsSubject.value.filter((client) => client.id !== id);
        this.clientsSubject.next(nextClients);
      }),
      catchError(() => of(void 0))
    );
  }

  getClientByEmail(email: string): Observable<Client | null> {
    return this.http.get<BackendClient | null>(`${this.baseUrl}/email/${encodeURIComponent(email)}`).pipe(
      map((client) => (client ? this.mapClient(client) : null)),
      catchError(() => of(null))
    );
  }
}
