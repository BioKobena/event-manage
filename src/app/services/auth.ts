import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Gestionnaire } from '../models/gestionnaire.model';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private userRoleSubject: BehaviorSubject<'admin' | 'user' | null>;
  public userRole: Observable<'admin' | 'user' | null>;

  private getLocalStorageItem(key: string): string | null {
    return typeof window !== 'undefined' && window?.localStorage
      ? window.localStorage.getItem(key)
      : null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && window?.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    if (typeof window !== 'undefined' && window?.localStorage) {
      window.localStorage.removeItem(key);
    }
  }

  constructor() {
    const storedUser = this.getLocalStorageItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();

    const storedRole = this.getLocalStorageItem('userRole');
    this.userRoleSubject = new BehaviorSubject<'admin' | 'user' | null>(
      (storedRole as 'admin' | 'user') || null
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
    if (username === 'admin' && password === 'admin') {
      const admin = new Gestionnaire({
        id: 1,
        nom: 'Admin',
        prenom: 'Système',
        genre: 'M',
        age: 30,
        email: 'admin@concerts.local',
        permission: 'ALL'
      });

      this.setLocalStorageItem('currentUser', JSON.stringify(admin));
      this.setLocalStorageItem('userRole', 'admin');
      this.currentUserSubject.next(admin);
      this.userRoleSubject.next('admin');
      return true;
    }
    return false;
  }

  loginAsUser(email: string, password: string): boolean {
    if (email && password) {
      const user = new Client({
        id: 1,
        nom: 'Dupont',
        prenom: 'Marie',
        genre: 'F',
        age: 28,
        email,
        compte_bancaire: 'FR76****1234'
      });

      this.setLocalStorageItem('currentUser', JSON.stringify(user));
      this.setLocalStorageItem('userRole', 'user');
      this.currentUserSubject.next(user);
      this.userRoleSubject.next('user');
      return true;
    }
    return false;
  }

  logout(): void {
    this.removeLocalStorageItem('currentUser');
    this.removeLocalStorageItem('userRole');
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
