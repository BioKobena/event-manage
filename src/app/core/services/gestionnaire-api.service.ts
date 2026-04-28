import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../api/api.constants';
import { Gestionnaire } from '../models/gestionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireApiService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Gestionnaire[]> {
    return this.http.get<Gestionnaire[]>(`${API_ENDPOINTS.gestionnaire}/gestionnaires`);
  }
}
