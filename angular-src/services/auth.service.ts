// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Gestionnaire } from '../models/gestionnaire.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private userRoleSubject: BehaviorSubject<'admin' | 'user' | null>;
  public userRole: Observable<'admin' | 'user' | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('currentUser') || 'null')
    );
    this.currentUser = this.currentUserSubject.asObservable();

    this.userRoleSubject = new BehaviorSubject<'admin' | 'user' | null>(
      localStorage.getItem('userRole') as 'admin' | 'user' | null
    );
    this.userRole = this.userRoleSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public get userRoleValue(): 'admin' | 'user' | null {
    return this.userRoleSubject.value;
  }

  loginAsAdmin(username: string, password: string): boolean {
    // Simulation d'authentification admin
    if (username === 'admin' && password === 'admin') {
      const admin = new Gestionnaire({
        id: 1,
        nom: 'Admin',
        prenom: 'Système',
        genre: 'M',
        age: 30,
        permission: 'ALL'
      });

      localStorage.setItem('currentUser', JSON.stringify(admin));
      localStorage.setItem('userRole', 'admin');
      this.currentUserSubject.next(admin);
      this.userRoleSubject.next('admin');
      return true;
    }
    return false;
  }

  loginAsUser(email: string, password: string): boolean {
    // Simulation d'authentification utilisateur
    if (email && password) {
      const user = new Client({
        id: 1,
        nom: 'Dupont',
        prenom: 'Marie',
        genre: 'F',
        age: 28,
        compte_bancaire: 'FR76****1234'
      });

      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('userRole', 'user');
      this.currentUserSubject.next(user);
      this.userRoleSubject.next('user');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    this.currentUserSubject.next(null);
    this.userRoleSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }

  isAdmin(): boolean {
    return this.userRoleValue === 'admin';
  }
}
