export interface Client {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  compteBancaire: string;
}

export interface ClientPayload {
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  compte_bancaire: string;
}
