import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Concert } from '../models/concert.model';
import { API_BASE_URL } from '../core/api/api.constants';

interface BackendConcert {
  id?: number;
  lieu?: string;
  date?: string;
  genre_musicale?: string;
  description?: string;
  popularite?: number;
  nombre_place?: number;
  prixTicket?: number;
}

interface ConcertPayload {
  lieu: string;
  date: string;
  genreMusicale: string;
  description: string;
  popularite: number;
  nombrePlace: number;
  prixTicket: number;
}

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  private readonly concertsSubject = new BehaviorSubject<Concert[]>([]);
  public readonly concerts: Observable<Concert[]> = this.concertsSubject.asObservable();
  private readonly baseUrl = `${API_BASE_URL}/concert`;

  constructor(private readonly http: HttpClient) {}

  private mapConcert(concert: BackendConcert): Concert {
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

  private toPayload(concert: Concert): ConcertPayload {
    return {
      lieu: concert.lieu,
      date: concert.date,
      genreMusicale: concert.genre_musicale,
      description: concert.description,
      popularite: concert.popularite,
      nombrePlace: concert.nombre_place,
      prixTicket: concert.prix,
    };
  }

  getAllConcerts(): Observable<Concert[]> {
    return this.http.get<BackendConcert[]>(`${this.baseUrl}/all`).pipe(
      map((concerts) => concerts.map((concert) => this.mapConcert(concert))),
      tap((concerts) => this.concertsSubject.next(concerts)),
      catchError(() => of(this.concertsSubject.value))
    );
  }

  getConcertById(id: number): Concert | undefined {
    return this.concertsSubject.value.find((concert) => concert.id === id);
  }

  addConcert(concert: Concert): Observable<Concert[]> {
    return this.http.post<BackendConcert[]>(this.baseUrl, this.toPayload(concert)).pipe(
      map((concerts) => concerts.map((item) => this.mapConcert(item))),
      tap((concerts) => this.concertsSubject.next(concerts)),
      catchError(() => of(this.concertsSubject.value))
    );
  }

  updateConcert(concert: Concert): Observable<Concert> {
    if (!concert.id) {
      throw new Error('Concert ID is required for update');
    }

    return this.http
      .put<BackendConcert>(`${this.baseUrl}/update/${concert.id}`, this.toPayload(concert))
      .pipe(
        map((item) => this.mapConcert(item)),
        tap((updatedConcert) => {
          const nextConcerts = this.concertsSubject.value.map((current) =>
            current.id === updatedConcert.id ? updatedConcert : current
          );
          this.concertsSubject.next(nextConcerts);
        }),
        catchError(() => of(concert))
      );
  }

  deleteConcert(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      tap(() => {
        const nextConcerts = this.concertsSubject.value.filter((concert) => concert.id !== id);
        this.concertsSubject.next(nextConcerts);
      }),
      catchError(() => of(void 0))
    );
  }

  searchConcerts(searchTerm: string): Concert[] {
    const term = searchTerm.toLowerCase();
    return this.concertsSubject.value.filter(
      (concert) =>
        concert.lieu.toLowerCase().includes(term) ||
        concert.genre_musicale.toLowerCase().includes(term) ||
        concert.description.toLowerCase().includes(term)
    );
  }

  filterByGenre(genre: string): Concert[] {
    if (!genre || genre === 'Tous') {
      return this.concertsSubject.value;
    }
    return this.concertsSubject.value.filter((concert) => concert.genre_musicale === genre);
  }
}
