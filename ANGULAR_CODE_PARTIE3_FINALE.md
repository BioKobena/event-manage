# CODE ANGULAR COMPLET - PARTIE 3 (Finale)

## FICHIER: concert-catalog.component.css

```css
/* src/app/components/user/concert-catalog/concert-catalog.component.css */

.catalog-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Search Section */
.search-section {
  margin-bottom: 2rem;
}

.search-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Genre Filters */
.genre-filters {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.genre-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #e5e7eb;
  background: white;
  color: #6b7280;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.genre-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.genre-btn.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

/* Concerts Grid */
.concerts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.concert-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
}

.concert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.concert-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-from-red-500.to-orange-600 {
  background: linear-gradient(135deg, #ef4444 0%, #ea580c 100%);
}

.gradient-from-pink-500.to-purple-600 {
  background: linear-gradient(135deg, #ec4899 0%, #9333ea 100%);
}

.gradient-from-blue-500.to-cyan-600 {
  background: linear-gradient(135deg, #3b82f6 0%, #0891b2 100%);
}

.gradient-from-yellow-500.to-orange-500 {
  background: linear-gradient(135deg, #eab308 0%, #f97316 100%);
}

.gradient-from-purple-500.to-pink-600 {
  background: linear-gradient(135deg, #a855f7 0%, #db2777 100%);
}

.music-icon {
  width: 4rem;
  height: 4rem;
  color: white;
  opacity: 0.5;
}

.concert-content {
  padding: 1.5rem;
}

.concert-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.concert-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
}

.genre-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-800 {
  color: #991b1b;
}

.bg-pink-100 {
  background-color: #fce7f3;
}

.text-pink-800 {
  color: #9f1239;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.text-blue-800 {
  color: #1e40af;
}

.bg-yellow-100 {
  background-color: #fef3c7;
}

.text-yellow-800 {
  color: #92400e;
}

.bg-purple-100 {
  background-color: #ede9fe;
}

.text-purple-800 {
  color: #5b21b6;
}

.concert-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.info-icon {
  width: 1rem;
  height: 1rem;
}

.concert-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.popularity-section {
  margin-bottom: 1rem;
}

.popularity-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.popularity-icon {
  width: 1rem;
  height: 1rem;
  color: #f59e0b;
}

.popularity-bar {
  height: 0.5rem;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.popularity-fill {
  height: 100%;
  background: #f59e0b;
  transition: width 0.3s;
}

.popularity-value {
  font-size: 0.75rem;
  color: #6b7280;
}

.concert-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0.75rem;
}

.price-section {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.price-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
}

.book-btn {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.book-btn:hover {
  background: #2563eb;
}

.btn-arrow {
  width: 1rem;
  height: 1rem;
}

.places-info {
  font-size: 0.875rem;
  color: #6b7280;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
}

.no-results-icon {
  width: 4rem;
  height: 4rem;
  color: #9ca3af;
  margin: 0 auto 1rem;
}

.no-results h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #6b7280;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
}

.modal-close:hover {
  color: #111827;
}

.booking-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.booking-info h4 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
}

.booking-info p {
  color: #6b7280;
  margin: 0.5rem 0;
}

.booking-price {
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.booking-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #d1d5db;
}

/* Responsive */
@media (max-width: 768px) {
  .concerts-grid {
    grid-template-columns: 1fr;
  }

  .genre-filters {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 0.5rem;
  }
}
```

---

## FICHIER: app.routes.ts (Configuration du routing)

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ConcertCatalogComponent } from './components/user/concert-catalog/concert-catalog.component';
import { MyTicketsComponent } from './components/user/my-tickets/my-tickets.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'concerts', pathMatch: 'full' },
      { path: 'concerts', component: ConcertCatalogComponent },
      { path: 'tickets', component: MyTicketsComponent },
      { path: 'profile', component: UserProfileComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];
```

---

## FICHIER: auth.guard.ts

```typescript
// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
```

---

## FICHIER: admin.guard.ts

```typescript
// src/app/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
```

---

## FICHIER: app.config.ts

```typescript
// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
};
```

---

## FICHIER: app.component.ts

```typescript
// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="app-container">
      <!-- Header Navigation (visible when logged in) -->
      <header *ngIf="authService.isLoggedIn()" class="app-header">
        <div class="header-content">
          <div class="logo" (click)="navigateHome()">
            <svg class="logo-icon" fill="white" viewBox="0 0 24 24">
              <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
            </svg>
            <span class="logo-text">Concert Manager</span>
          </div>

          <!-- User Navigation -->
          <nav *ngIf="authService.userRoleValue === 'user'" class="nav-links">
            <a routerLink="/user/concerts" routerLinkActive="active" class="nav-link">Concerts</a>
            <a routerLink="/user/tickets" routerLinkActive="active" class="nav-link">Mes Tickets</a>
            <a routerLink="/user/profile" routerLinkActive="active" class="nav-link">Profil</a>
            <button (click)="logout()" class="logout-btn">Déconnexion</button>
          </nav>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f9fafb;
    }

    .app-header {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      padding: 1rem 0;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
    }

    .logo-icon {
      width: 2rem;
      height: 2rem;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: background 0.3s;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
    }

    .logout-btn {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.3s;
    }

    .logout-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .main-content {
      min-height: calc(100vh - 4rem);
    }
  `]
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  navigateHome(): void {
    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user/concerts']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
```

---

## FICHIER: main.ts

```typescript
// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
```

---

## FICHIER: package.json

```json
{
  "name": "concert-manager",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^17.0.0",
    "@angular/common": "^17.0.0",
    "@angular/compiler": "^17.0.0",
    "@angular/core": "^17.0.0",
    "@angular/forms": "^17.0.0",
    "@angular/platform-browser": "^17.0.0",
    "@angular/platform-browser-dynamic": "^17.0.0",
    "@angular/router": "^17.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.0.0",
    "@angular/cli": "^17.0.0",
    "@angular/compiler-cli": "^17.0.0",
    "typescript": "~5.2.2",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## FICHIER: tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## FICHIER: styles.css

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f9fafb;
  color: #111827;
}
```

---

## FICHIER: tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

---

## GUIDE D'INSTALLATION ET D'UTILISATION

### Installation

```bash
# 1. Créer le projet Angular
npm install -g @angular/cli
ng new concert-manager --standalone --routing --style=css

# 2. Installer Tailwind CSS
cd concert-manager
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# 3. Lancer le serveur de développement
ng serve

# 4. Ouvrir dans le navigateur
# http://localhost:4200
```

### Identifiants de test

**Administrateur :**
- Nom d'utilisateur : `admin`
- Mot de passe : `admin`

**Utilisateur :**
- Email : n'importe quel email
- Mot de passe : n'importe quel mot de passe

### Fonctionnalités implémentées

#### Interface Admin
✅ Dashboard avec statistiques
✅ Gestion CRUD complète des concerts
✅ Gestion CRUD complète des clients
✅ Gestion CRUD complète des artistes
✅ Vue d'ensemble des tickets vendus
✅ Recherche et filtres
✅ Modaux pour les formulaires

#### Interface Utilisateur
✅ Catalogue de concerts avec filtres
✅ Recherche par mots-clés
✅ Filtrage par genre musical
✅ Réservation de tickets
✅ Vue "Mes tickets"
✅ Profil utilisateur
✅ Design responsive

### Architecture

- **Modèles** : Classes TypeScript correspondant aux entités JPA
- **Services** : Gestion de la logique métier et des données (avec RxJS)
- **Components** : Composants standalone Angular 17+
- **Guards** : Protection des routes (AuthGuard, AdminGuard)
- **Routing** : Navigation entre les différentes vues

### Technologies utilisées

- Angular 17 (Standalone Components)
- TypeScript
- RxJS pour la gestion d'état
- Tailwind CSS pour le style
- CSS3 pour les animations

---

## FIN DU CODE COMPLET

Tous les fichiers nécessaires pour créer une application Angular complète de gestion de concerts sont maintenant fournis. Copiez-les dans la structure de dossiers appropriée et suivez le guide d'installation.
