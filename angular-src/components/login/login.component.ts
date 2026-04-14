// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginType: 'admin' | 'user' = 'user';

  // Admin credentials
  adminUsername: string = '';
  adminPassword: string = '';

  // User credentials
  userEmail: string = '';
  userPassword: string = '';

  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  setLoginType(type: 'admin' | 'user'): void {
    this.loginType = type;
    this.errorMessage = '';
  }

  loginAsAdmin(): void {
    if (this.authService.loginAsAdmin(this.adminUsername, this.adminPassword)) {
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Identifiants administrateur incorrects';
    }
  }

  loginAsUser(): void {
    if (this.authService.loginAsUser(this.userEmail, this.userPassword)) {
      this.router.navigate(['/user/concerts']);
    } else {
      this.errorMessage = 'Identifiants utilisateur incorrects';
    }
  }
}
