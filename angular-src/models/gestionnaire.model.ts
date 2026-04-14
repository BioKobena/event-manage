// src/app/models/gestionnaire.model.ts
import { User } from './user.model';

export class Gestionnaire extends User {
  permission: string = '';

  constructor(init?: Partial<Gestionnaire>) {
    super(init);
    Object.assign(this, init);
  }
}
