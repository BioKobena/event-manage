import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AuthService } from '../core/services/auth.service';
import { UserRole } from '../core/models/auth-session.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  readonly roles: { value: UserRole; label: string; helper: string }[] = [
    { value: 'user', label: 'Utilisateur', helper: 'Accès au catalogue, aux billets et aux réservations.' },
    { value: 'admin', label: 'Administrateur', helper: 'Accès au pilotage et à la gestion des opérations.' }
  ];

  selectedRole: UserRole = 'user';
  email = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    if (this.auth.currentSession) {
      void this.router.navigate(['/dashboard']);
    }
  }

  login(): void {
    const email = this.email.trim();

    if (!email) {
      this.errorMessage = 'Renseignez une adresse e-mail.';
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    const login$ = this.selectedRole === 'admin'
      ? this.auth.loginAsAdmin(email)
      : this.auth.loginAsUser(email);

    login$
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: (session) => {
          void this.router.navigate(session.role === 'admin' ? ['/gestionnaire'] : ['/dashboard']);
        },
        error: (error: unknown) => {
          this.errorMessage = error instanceof Error
            ? error.message
            : 'Connexion impossible pour le moment.';
        }
      });
  }
}
