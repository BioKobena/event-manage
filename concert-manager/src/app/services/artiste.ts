import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artiste } from '../models/artiste.model';

@Injectable({
  providedIn: 'root',
})
export class ArtisteService {
  private artistesSubject: BehaviorSubject<Artiste[]>;
  public artistes: Observable<Artiste[]>;

  private mockArtistes: Artiste[] = [
    new Artiste({
      id: 1,
      nom: 'Durand',
      prenom: 'Alex',
      genre: 'M',
      age: 32,
      email: 'alex.durand@example.com',
      nationalite: 'Française'
    }),
    new Artiste({
      id: 2,
      nom: 'Smith',
      prenom: 'Emma',
      genre: 'F',
      age: 27,
      email: 'emma.smith@example.com',
      nationalite: 'Britannique'
    }),
    new Artiste({
      id: 3,
      nom: 'Weber',
      prenom: 'Hans',
      genre: 'M',
      age: 29,
      email: 'hans.weber@example.com',
      nationalite: 'Allemande'
    }),
    new Artiste({
      id: 4,
      nom: 'Johnson',
      prenom: 'Michael',
      genre: 'M',
      age: 45,
      email: 'michael.johnson@example.com',
      nationalite: 'Américaine'
    })
  ];

  constructor() {
    this.artistesSubject = new BehaviorSubject<Artiste[]>(this.mockArtistes);
    this.artistes = this.artistesSubject.asObservable();
  }

  getAllArtistes(): Observable<Artiste[]> {
    return this.artistes;
  }

  getArtisteById(id: number): Artiste | undefined {
    return this.artistesSubject.value.find((a) => a.id === id);
  }

  addArtiste(artiste: Artiste): void {
    const artistes = this.artistesSubject.value;
    artiste.id = Math.max(...artistes.map((a) => a.id || 0)) + 1;
    this.artistesSubject.next([...artistes, artiste]);
  }

  updateArtiste(artiste: Artiste): void {
    const artistes = this.artistesSubject.value;
    const index = artistes.findIndex((a) => a.id === artiste.id);
    if (index !== -1) {
      artistes[index] = artiste;
      this.artistesSubject.next([...artistes]);
    }
  }

  deleteArtiste(id: number): void {
    const artistes = this.artistesSubject.value.filter((a) => a.id !== id);
    this.artistesSubject.next(artistes);
  }
}
