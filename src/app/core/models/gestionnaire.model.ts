export interface Gestionnaire {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  permission: string;
}

export interface GestionnairePayload {
  nom: string;
  prenom: string;
  genre: string;
  age: number;
  email: string;
  permission: string;
}
