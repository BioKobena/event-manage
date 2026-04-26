import { Concert } from './concert.model';
import { Client } from './client.model';

export class Ticket {
  id?: number;
  prix: number = 0;
  concert?: Concert;
  client?: Client;

  constructor(init?: Partial<Ticket>) {
    Object.assign(this, init);
  }
}
