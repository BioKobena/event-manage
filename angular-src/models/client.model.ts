// src/app/models/client.model.ts
import { User } from './user.model';
import { Ticket } from './ticket.model';

export class Client extends User {
  compte_bancaire: string = '';
  ticket?: Ticket;

  constructor(init?: Partial<Client>) {
    super(init);
    Object.assign(this, init);
  }
}
