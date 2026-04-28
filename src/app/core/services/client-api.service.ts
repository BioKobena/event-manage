import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../api/api.constants';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${API_ENDPOINTS.client}/all`);
  }

  getByEmail(email: string): Observable<Client> {
    return this.http.get<Client>(`${API_ENDPOINTS.client}/email/${encodeURIComponent(email)}`);
  }
}
