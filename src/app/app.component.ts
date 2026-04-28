import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthSession, UserRole } from './core/models/auth-session.model';
import { AuthService } from './core/services/auth.service';

interface NavigationItem {
  label: string;
  path: string;
  roles: UserRole[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly title = 'Concert Manager';

  readonly navigation: NavigationItem[] = [
    { label: 'Accueil', path: '/dashboard', roles: ['admin', 'user'] },
    { label: 'Concerts', path: '/concerts', roles: ['admin', 'user'] },
    { label: 'Artistes', path: '/artistes', roles: ['admin', 'user'] },
    { label: 'Mes billets', path: '/tickets', roles: ['user'] },
    { label: 'Gestionnaire', path: '/gestionnaire', roles: ['admin'] }
  ];

  readonly highlights = [
    { value: 'Admin', label: 'pilotage des opérations' },
    { value: 'User', label: 'parcours de réservation' },
    { value: 'Live', label: 'vue synthétique des activités' }
  ];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  get session$() {
    return this.auth.session$;
  }

  canShow(item: NavigationItem, session: AuthSession | null): boolean {
    return session ? item.roles.includes(session.role) : item.path === '/dashboard';
  }

  logout(): void {
    this.auth.logout();
    void this.router.navigate(['/login']);
  }
}
