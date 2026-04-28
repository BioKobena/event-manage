import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Artiste } from '../models/artiste.model';
import { API_BASE_URL } from '../core/api/api.constants';

interface BackendArtiste {
  id?: number;
  nom?: string;
  prenom?: string;
  genre?: string;
  age?: number;
  email?: string;
  nationalite?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtisteService {
  private readonly artistesSubject = new BehaviorSubject<Artiste[]>([]);
  public readonly artistes: Observable<Artiste[]> = this.artistesSubject.asObservable();
  private readonly baseUrl = `${API_BASE_URL}/artiste`;

  constructor(private readonly http: HttpClient) {}

  private mapArtiste(artiste: BackendArtiste): Artiste {
    return new Artiste({
      id: artiste.id,
      nom: artiste.nom ?? '',
      prenom: artiste.prenom ?? '',
      genre: artiste.genre ?? '',
      age: artiste.age ?? 0,
      email: artiste.email ?? '',
      nationalite: artiste.nationalite ?? '',
    });
  }

  private toPayload(artiste: Artiste): BackendArtiste {
    return {
      nom: artiste.nom,
      prenom: artiste.prenom,
      genre: artiste.genre,
      age: artiste.age,
      email: artiste.email,
      nationalite: artiste.nationalite,
    };
  }

  getAllArtistes(): Observable<Artiste[]> {
    return this.http.get<BackendArtiste[]>(`${this.baseUrl}/all`).pipe(
      map((artistes) => artistes.map((artiste) => this.mapArtiste(artiste))),
      tap((artistes) => this.artistesSubject.next(artistes)),
      catchError(() => of(this.artistesSubject.value))
    );
  }

  getArtisteById(id: number): Artiste | undefined {
    return this.artistesSubject.value.find((artiste) => artiste.id === id);
  }

  addArtiste(artiste: Artiste): Observable<Artiste[]> {
    return this.http.post<BackendArtiste[]>(this.baseUrl, this.toPayload(artiste)).pipe(
      map((artistes) => artistes.map((item) => this.mapArtiste(item))),
      tap((artistes) => this.artistesSubject.next(artistes)),
      catchError(() => of(this.artistesSubject.value))
    );
  }

  updateArtiste(artiste: Artiste): Observable<Artiste> {
    if (!artiste.id) {
      throw new Error('Artiste ID is required for update');
    }

    return this.http
      .put<BackendArtiste>(`${this.baseUrl}/update/${artiste.id}`, this.toPayload(artiste))
      .pipe(
        map((item) => this.mapArtiste(item)),
        tap((updatedArtiste) => {
          const nextArtistes = this.artistesSubject.value.map((current) =>
            current.id === updatedArtiste.id ? updatedArtiste : current
          );
          this.artistesSubject.next(nextArtistes);
        }),
        catchError(() => of(artiste))
      );
  }

  deleteArtiste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      tap(() => {
        const nextArtistes = this.artistesSubject.value.filter((artiste) => artiste.id !== id);
        this.artistesSubject.next(nextArtistes);
      }),
      catchError(() => of(void 0))
    );
  }
}
