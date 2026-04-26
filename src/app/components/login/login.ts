import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
  loginType: 'admin' | 'user' = 'user';

  adminUsername: string = '';
  adminPassword: string = '';

  userEmail: string = '';
  userPassword: string = '';

  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else if (this.authService.userRoleValue === 'user') {
      this.router.navigate(['/user/dashboard']);
    }
  }

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
      this.router.navigate(['/user/dashboard']);
    } else {
      this.errorMessage = 'Identifiants utilisateur incorrects';
    }
  }
}
