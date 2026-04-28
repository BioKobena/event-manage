import { Client } from './client.model';

export interface Ticket {
  id: number;
  numero: string;
  prix: number;
  client?: Client | null;
}
