import { Artiste } from './artiste.model';

export interface Concert {
  id: number;
  lieu: string;
  date: string;
  genreMusicale: string;
  description: string;
  popularite: number;
  nombrePlace: number;
  prixTicket: number;
  artists?: Artiste[];
}

export interface ConcertPayload {
  lieu: string;
  date: string;
  genreMusicale: string;
  description: string;
  popularite: number;
  nombrePlace: number;
  prixTicket: number;
}
