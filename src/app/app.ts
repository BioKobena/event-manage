import { Component, signal, OnDestroy } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnDestroy {
  protected readonly title = signal('concert-manager');
  isLoggedIn = signal(false);
  userRole = signal<'admin' | 'user' | null>(null);

  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn.set(this.authService.isLoggedIn());
    this.userRole.set(this.authService.userRoleValue);

    this.subscriptions.push(
      this.authService.currentUser.subscribe((user) => this.isLoggedIn.set(!!user)),
      this.authService.userRole.subscribe((role) => this.userRole.set(role))
    );
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/concerts']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
