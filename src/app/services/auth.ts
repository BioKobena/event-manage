import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import { Gestionnaire } from '../models/gestionnaire.model';
import { Client } from '../models/client.model';
import { ClientService } from './client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private userRoleSubject: BehaviorSubject<'admin' | 'user' | null>;
  public userRole: Observable<'admin' | 'user' | null>;

  private getLocalStorageItem(key: string): string | null {
    const storage = typeof window !== 'undefined' ? window.localStorage : null;
    return storage && typeof storage.getItem === 'function' ? storage.getItem(key) : null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    const storage = typeof window !== 'undefined' ? window.localStorage : null;
    if (storage && typeof storage.setItem === 'function') {
      storage.setItem(key, value);
    }
  }

  private removeLocalStorageItem(key: string): void {
    const storage = typeof window !== 'undefined' ? window.localStorage : null;
    if (storage && typeof storage.removeItem === 'function') {
      storage.removeItem(key);
    }
  }

  constructor(private readonly clientService: ClientService) {
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

  private setSession(user: User, role: 'admin' | 'user'): void {
    this.setLocalStorageItem('currentUser', JSON.stringify(user));
    this.setLocalStorageItem('userRole', role);
    this.currentUserSubject.next(user);
    this.userRoleSubject.next(role);
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
      this.setSession(admin, 'admin');
      return true;
    }
    return false;
  }

  loginAsUser(email: string, password: string): Observable<boolean> {
    if (!email || !password) {
      return of(false);
    }

    return this.clientService.getAllClients().pipe(
      switchMap((clients) => {
        const existing = clients.find((client) => client.email === email);
        if (existing) {
          this.setSession(existing, 'user');
          return of(true);
        }

        const createdClient = new Client({
          nom: 'Utilisateur',
          prenom: 'Invité',
          genre: 'U',
          age: 0,
          email,
          compte_bancaire: '',
        });

        return this.clientService.addClient(createdClient).pipe(
          map((createdClients) => {
            const created =
              createdClients.find((item) => item.email === email) ??
              createdClients[createdClients.length - 1] ??
              createdClient;
            this.setSession(created, 'user');
            return true;
          })
        );
      }),
      catchError(() => of(false))
    );
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
