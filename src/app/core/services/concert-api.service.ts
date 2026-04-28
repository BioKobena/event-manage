import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../api/api.constants';
import { Concert, ConcertPayload } from '../models/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertApiService {
  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(`${API_ENDPOINTS.concert}/all`);
  }

  getById(id: number): Observable<Concert> {
    return this.http.get<Concert>(`${API_ENDPOINTS.concert}/${id}`);
  }

  // create(payload: ConcertPayload): Observable<Concert[]> {
  //   return this.http.post<Concert[]>(API_ENDPOINTS.concert, payload);
  // }
  create(payload: ConcertPayload): Observable<Concert> {
    return this.http.post<Concert>(API_ENDPOINTS.concert, payload);
  }

  update(id: number, payload: ConcertPayload): Observable<Concert> {
    return this.http.put<Concert>(`${API_ENDPOINTS.concert}/update/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.concert}/delete/${id}`);
  }
}
