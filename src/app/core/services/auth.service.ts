import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { AuthSession, UserRole } from '../models/auth-session.model';
import { Client } from '../models/client.model';
import { Gestionnaire } from '../models/gestionnaire.model';
import { ClientApiService } from './client-api.service';
import { GestionnaireApiService } from './gestionnaire-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'event-manage.session';
  private readonly sessionSubject = new BehaviorSubject<AuthSession | null>(this.restoreSession());

  readonly session$ = this.sessionSubject.asObservable();

  constructor(
    private readonly clientApi: ClientApiService,
    private readonly gestionnaireApi: GestionnaireApiService
  ) {}

  get currentSession(): AuthSession | null {
    return this.sessionSubject.value;
  }

  loginAsUser(email: string): Observable<AuthSession> {
    const normalizedEmail = email.trim().toLowerCase();

    return this.clientApi.getByEmail(normalizedEmail).pipe(
      map((client: Client) => {
        if (!client) {
          throw new Error('Utilisateur introuvable');
        }

        return this.persistSession({
          role: 'user',
          id: client.id,
          email: client.email ?? normalizedEmail,
          displayName: this.buildDisplayName(client.nom, client.prenom, normalizedEmail),
          source: 'client'
        });
      })
    );
  }

  loginAsAdmin(email: string): Observable<AuthSession> {
    const normalizedEmail = email.trim().toLowerCase();

    return this.gestionnaireApi.getAll().pipe(
      map((gestionnaires: Gestionnaire[]) => {
        const gestionnaire = gestionnaires.find(
          (item) => item.email?.trim().toLowerCase() === normalizedEmail
        );

        if (!gestionnaire) {
          throw new Error('Administrateur introuvable');
        }

        return this.persistSession({
          role: 'admin',
          id: gestionnaire.id,
          email: gestionnaire.email ?? normalizedEmail,
          displayName: this.buildDisplayName(
            gestionnaire.nom,
            gestionnaire.prenom,
            normalizedEmail
          ),
          source: 'gestionnaire'
        });
      })
    );
  }

  logout(): void {
    this.sessionSubject.next(null);

    if (this.hasStorage()) {
      localStorage.removeItem(this.storageKey);
    }
  }

  hasRole(role: UserRole): boolean {
    return this.currentSession?.role === role;
  }

  private persistSession(session: AuthSession): AuthSession {
    this.sessionSubject.next(session);

    if (this.hasStorage()) {
      localStorage.setItem(this.storageKey, JSON.stringify(session));
    }

    return session;
  }

  private restoreSession(): AuthSession | null {
    if (!this.hasStorage()) {
      return null;
    }

    try {
      const storedSession = localStorage.getItem(this.storageKey);
      if (!storedSession) {
        return null;
      }

      return JSON.parse(storedSession) as AuthSession;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }

  private buildDisplayName(nom?: string, prenom?: string, fallbackEmail = ''): string {
    const parts = [prenom?.trim(), nom?.trim()].filter(Boolean);
    return parts.length > 0 ? parts.join(' ') : fallbackEmail;
  }

  private hasStorage(): boolean {
    return typeof localStorage !== 'undefined';
  }
}
