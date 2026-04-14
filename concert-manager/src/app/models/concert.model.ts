import { Artiste } from './artiste.model';
import { Ticket } from './ticket.model';

export class Concert {
  id?: number;
  lieu: string = '';
  date: string = '';
  genre_musicale: string = '';
  description: string = '';
  popularite: number = 0;
  nombre_place: number = 0;
  prix: number = 0;
  artiste?: Artiste[];
  ticket?: Ticket[];

  constructor(init?: Partial<Concert>) {
    Object.assign(this, init);
  }
}
