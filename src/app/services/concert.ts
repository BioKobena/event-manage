import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Concert } from '../models/concert.model';

@Injectable({
  providedIn: 'root',
})
export class ConcertService {
  private concertsSubject: BehaviorSubject<Concert[]>;
  public concerts: Observable<Concert[]>;

  private mockConcerts: Concert[] = [
    new Concert({
      id: 1,
      lieu: 'Olympia Paris',
      date: '2026-05-15',
      genre_musicale: 'Rock',
      description: 'Concert rock énergique avec les meilleurs artistes de la scène internationale.',
      popularite: 95,
      nombre_place: 2000,
      prix: 55
    }),
    new Concert({
      id: 2,
      lieu: 'Zénith Lille',
      date: '2026-06-20',
      genre_musicale: 'Pop',
      description: 'Soirée pop inoubliable avec une ambiance festive garantie.',
      popularite: 88,
      nombre_place: 3000,
      prix: 45
    }),
    new Concert({
      id: 3,
      lieu: 'Stade de France',
      date: '2026-07-10',
      genre_musicale: 'Électro',
      description: 'Festival électro géant avec les plus grands DJ du moment.',
      popularite: 92,
      nombre_place: 50000,
      prix: 70
    }),
    new Concert({
      id: 4,
      lieu: 'Le Bataclan',
      date: '2026-08-05',
      genre_musicale: 'Jazz',
      description: 'Soirée jazz intimiste avec des musiciens de renommée mondiale.',
      popularite: 85,
      nombre_place: 1500,
      prix: 65
    }),
    new Concert({
      id: 5,
      lieu: 'AccorHotels Arena',
      date: '2026-09-12',
      genre_musicale: 'Hip-Hop',
      description: 'Concert hip-hop explosif avec les stars du rap français.',
      popularite: 90,
      nombre_place: 20000,
      prix: 60
    })
  ];

  constructor() {
    this.concertsSubject = new BehaviorSubject<Concert[]>(this.mockConcerts);
    this.concerts = this.concertsSubject.asObservable();
  }

  getAllConcerts(): Observable<Concert[]> {
    return this.concerts;
  }

  getConcertById(id: number): Concert | undefined {
    return this.concertsSubject.value.find((c) => c.id === id);
  }

  addConcert(concert: Concert): void {
    const concerts = this.concertsSubject.value;
    concert.id = Math.max(...concerts.map((c) => c.id || 0)) + 1;
    this.concertsSubject.next([...concerts, concert]);
  }

  updateConcert(concert: Concert): void {
    const concerts = this.concertsSubject.value;
    const index = concerts.findIndex((c) => c.id === concert.id);
    if (index !== -1) {
      concerts[index] = concert;
      this.concertsSubject.next([...concerts]);
    }
  }

  deleteConcert(id: number): void {
    const concerts = this.concertsSubject.value.filter((c) => c.id !== id);
    this.concertsSubject.next(concerts);
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
    return this.concertsSubject.value.filter((c) => c.genre_musicale === genre);
  }
}
