// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsSubject: BehaviorSubject<Client[]>;
  public clients: Observable<Client[]>;

  private mockClients: Client[] = [
    new Client({
      id: 1,
      nom: 'Dupont',
      prenom: 'Marie',
      genre: 'F',
      age: 28,
      compte_bancaire: 'FR76****1234'
    }),
    new Client({
      id: 2,
      nom: 'Martin',
      prenom: 'Jean',
      genre: 'M',
      age: 35,
      compte_bancaire: 'FR76****5678'
    }),
    new Client({
      id: 3,
      nom: 'Bernard',
      prenom: 'Sophie',
      genre: 'F',
      age: 42,
      compte_bancaire: 'FR76****9012'
    })
  ];

  constructor() {
    this.clientsSubject = new BehaviorSubject<Client[]>(this.mockClients);
    this.clients = this.clientsSubject.asObservable();
  }

  getAllClients(): Observable<Client[]> {
    return this.clients;
  }

  getClientById(id: number): Client | undefined {
    return this.clientsSubject.value.find(c => c.id === id);
  }

  addClient(client: Client): void {
    const clients = this.clientsSubject.value;
    client.id = Math.max(...clients.map(c => c.id || 0)) + 1;
    this.clientsSubject.next([...clients, client]);
  }

  updateClient(client: Client): void {
    const clients = this.clientsSubject.value;
    const index = clients.findIndex(c => c.id === client.id);
    if (index !== -1) {
      clients[index] = client;
      this.clientsSubject.next([...clients]);
    }
  }

  deleteClient(id: number): void {
    const clients = this.clientsSubject.value.filter(c => c.id !== id);
    this.clientsSubject.next(clients);
  }
}
