import { User } from './user.model';
import { Concert } from './concert.model';

export class Artiste extends User {
  nationalite: string = '';
  concert?: Concert;

  constructor(init?: Partial<Artiste>) {
    super(init);
    Object.assign(this, init);
  }
}
