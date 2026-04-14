export class User {
  id?: number;
  nom: string = '';
  prenom: string = '';
  genre: string = '';
  age: number = 0;
  email: string = '';

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
