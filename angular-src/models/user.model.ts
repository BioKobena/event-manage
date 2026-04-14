// src/app/models/user.model.ts
export class User {
  id?: number;
  nom: string = '';
  prenom: string = '';
  genre: string = '';
  age: number = 0;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
