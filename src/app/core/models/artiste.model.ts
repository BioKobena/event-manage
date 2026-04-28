export interface Artiste {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  nationalite: string;
}

export interface ArtistePayload {
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  nationalite: string;
}
