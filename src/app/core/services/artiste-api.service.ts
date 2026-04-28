import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../api/api.constants';
import { Artiste } from '../models/artiste.model';

@Injectable({
  providedIn: 'root'
})
export class ArtisteApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(`${API_ENDPOINTS.artiste}/all`);
  }
}
