# CODE ANGULAR COMPLET - APPLICATION DE GESTION DE CONCERTS

## FICHIER: login.component.html

```html
<!-- src/app/components/login/login.component.html -->
<div class="login-container">
  <div class="login-card">
    <div class="login-header">
      <div class="login-icon">
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
        </svg>
      </div>
      <h1 style="font-size: 1.875rem; font-weight: bold; color: #111827; margin-bottom: 0.5rem;">Concert Manager</h1>
      <p style="color: #6b7280;">Système de gestion de concerts</p>
    </div>

    <div class="login-tabs">
      <button
        (click)="setLoginType('user')"
        [class]="loginType === 'user' ? 'tab-button active' : 'tab-button inactive'"
      >
        Utilisateur
      </button>
      <button
        (click)="setLoginType('admin')"
        [class]="loginType === 'admin' ? 'tab-button active' : 'tab-button inactive'"
      >
        Administrateur
      </button>
    </div>

    <form *ngIf="loginType === 'admin'" (ngSubmit)="loginAsAdmin()">
      <div class="form-group">
        <label class="form-label">Nom d'utilisateur</label>
        <input
          type="text"
          [(ngModel)]="adminUsername"
          name="adminUsername"
          placeholder="admin"
          class="form-input"
          required
        />
      </div>

      <div class="form-group">
        <label class="form-label">Mot de passe</label>
        <input
          type="password"
          [(ngModel)]="adminPassword"
          name="adminPassword"
          placeholder="••••••••"
          class="form-input"
          required
        />
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <button type="submit" class="submit-button">
        Connexion Admin
      </button>

      <p class="demo-hint">Démo : admin / admin</p>
    </form>

    <form *ngIf="loginType === 'user'" (ngSubmit)="loginAsUser()">
      <div class="form-group">
        <label class="form-label">Email</label>
        <input
          type="email"
          [(ngModel)]="userEmail"
          name="userEmail"
          placeholder="marie.dupont@email.com"
          class="form-input"
          required
        />
      </div>

      <div class="form-group">
        <label class="form-label">Mot de passe</label>
        <input
          type="password"
          [(ngModel)]="userPassword"
          name="userPassword"
          placeholder="••••••••"
          class="form-input"
          required
        />
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <button type="submit" class="submit-button">
        Connexion Utilisateur
      </button>

      <p class="demo-hint">Démo : entrez n'importe quel email/mot de passe</p>
    </form>
  </div>
</div>
```

---

## FICHIER: admin-dashboard.component.ts

```typescript
// src/app/components/admin/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ConcertService } from '../../../services/concert.service';
import { ClientService } from '../../../services/client.service';
import { ArtisteService } from '../../../services/artiste.service';
import { TicketService } from '../../../services/ticket.service';
import { Concert } from '../../../models/concert.model';
import { Client } from '../../../models/client.model';
import { Artiste } from '../../../models/artiste.model';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeView: 'dashboard' | 'concerts' | 'clients' | 'artistes' | 'tickets' = 'dashboard';

  concerts: Concert[] = [];
  clients: Client[] = [];
  artistes: Artiste[] = [];
  tickets: Ticket[] = [];

  // Forms
  showConcertForm: boolean = false;
  selectedConcert: Concert | null = null;
  concertForm: Concert = new Concert();

  showClientForm: boolean = false;
  selectedClient: Client | null = null;
  clientForm: Client = new Client();

  showArtisteForm: boolean = false;
  selectedArtiste: Artiste | null = null;
  artisteForm: Artiste = new Artiste();

  // Search
  searchTerm: string = '';

  constructor(
    private authService: AuthService,
    private concertService: ConcertService,
    private clientService: ClientService,
    private artisteService: ArtisteService,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.concertService.getAllConcerts().subscribe(data => this.concerts = data);
    this.clientService.getAllClients().subscribe(data => this.clients = data);
    this.artisteService.getAllArtistes().subscribe(data => this.artistes = data);
    this.ticketService.getAllTickets().subscribe(data => this.tickets = data);
  }

  setActiveView(view: 'dashboard' | 'concerts' | 'clients' | 'artistes' | 'tickets'): void {
    this.activeView = view;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Concert CRUD
  openConcertForm(concert?: Concert): void {
    if (concert) {
      this.selectedConcert = concert;
      this.concertForm = { ...concert };
    } else {
      this.selectedConcert = null;
      this.concertForm = new Concert();
    }
    this.showConcertForm = true;
  }

  saveConcert(): void {
    if (this.selectedConcert) {
      this.concertService.updateConcert(this.concertForm);
    } else {
      this.concertService.addConcert(this.concertForm);
    }
    this.showConcertForm = false;
    this.loadData();
  }

  deleteConcert(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce concert ?')) {
      this.concertService.deleteConcert(id);
      this.loadData();
    }
  }

  // Client CRUD
  openClientForm(client?: Client): void {
    if (client) {
      this.selectedClient = client;
      this.clientForm = { ...client };
    } else {
      this.selectedClient = null;
      this.clientForm = new Client();
    }
    this.showClientForm = true;
  }

  saveClient(): void {
    if (this.selectedClient) {
      this.clientService.updateClient(this.clientForm);
    } else {
      this.clientService.addClient(this.clientForm);
    }
    this.showClientForm = false;
    this.loadData();
  }

  deleteClient(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clientService.deleteClient(id);
      this.loadData();
    }
  }

  // Artiste CRUD
  openArtisteForm(artiste?: Artiste): void {
    if (artiste) {
      this.selectedArtiste = artiste;
      this.artisteForm = { ...artiste };
    } else {
      this.selectedArtiste = null;
      this.artisteForm = new Artiste();
    }
    this.showArtisteForm = true;
  }

  saveArtiste(): void {
    if (this.selectedArtiste) {
      this.artisteService.updateArtiste(this.artisteForm);
    } else {
      this.artisteService.addArtiste(this.artisteForm);
    }
    this.showArtisteForm = false;
    this.loadData();
  }

  deleteArtiste(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet artiste ?')) {
      this.artisteService.deleteArtiste(id);
      this.loadData();
    }
  }

  // Utilities
  getTotalRevenue(): number {
    return this.ticketService.getTotalRevenue();
  }

  getFilteredConcerts(): Concert[] {
    if (!this.searchTerm) return this.concerts;
    return this.concertService.searchConcerts(this.searchTerm);
  }

  getGenreColor(genre: string): string {
    const colors: { [key: string]: string } = {
      'Rock': 'bg-red-100 text-red-800',
      'Pop': 'bg-pink-100 text-pink-800',
      'Électro': 'bg-blue-100 text-blue-800',
      'Jazz': 'bg-yellow-100 text-yellow-800',
      'Hip-Hop': 'bg-purple-100 text-purple-800'
    };
    return colors[genre] || 'bg-gray-100 text-gray-800';
  }
}
```

---

## FICHIER: admin-dashboard.component.html

```html
<!-- src/app/components/admin/admin-dashboard/admin-dashboard.component.html -->
<div class="admin-container">
  <!-- Header -->
  <header class="admin-header">
    <div class="header-content">
      <div class="header-left">
        <svg class="header-icon" fill="white" viewBox="0 0 24 24">
          <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
        </svg>
        <div>
          <h1 class="header-title">Concert Manager</h1>
          <p class="header-subtitle">Dashboard Administrateur</p>
        </div>
      </div>

      <div class="header-nav">
        <button
          (click)="setActiveView('dashboard')"
          [class]="activeView === 'dashboard' ? 'nav-btn active' : 'nav-btn'"
        >
          Dashboard
        </button>
        <button
          (click)="setActiveView('concerts')"
          [class]="activeView === 'concerts' ? 'nav-btn active' : 'nav-btn'"
        >
          Concerts
        </button>
        <button
          (click)="setActiveView('clients')"
          [class]="activeView === 'clients' ? 'nav-btn active' : 'nav-btn'"
        >
          Clients
        </button>
        <button
          (click)="setActiveView('artistes')"
          [class]="activeView === 'artistes' ? 'nav-btn active' : 'nav-btn'"
        >
          Artistes
        </button>
        <button
          (click)="setActiveView('tickets')"
          [class]="activeView === 'tickets' ? 'nav-btn active' : 'nav-btn'"
        >
          Tickets
        </button>
        <button (click)="logout()" class="nav-btn logout-btn">
          Déconnexion
        </button>
      </div>
    </div>
  </header>

  <div class="main-content">
    <!-- DASHBOARD VIEW -->
    <div *ngIf="activeView === 'dashboard'" class="dashboard-view">
      <h2 class="section-title">Statistiques</h2>

      <div class="stats-grid">
        <div class="stat-card stat-blue">
          <div class="stat-value">{{ concerts.length }}</div>
          <div class="stat-label">Concerts</div>
        </div>

        <div class="stat-card stat-green">
          <div class="stat-value">{{ clients.length }}</div>
          <div class="stat-label">Clients</div>
        </div>

        <div class="stat-card stat-purple">
          <div class="stat-value">{{ artistes.length }}</div>
          <div class="stat-label">Artistes</div>
        </div>

        <div class="stat-card stat-orange">
          <div class="stat-value">{{ tickets.length }}</div>
          <div class="stat-label">Tickets vendus</div>
        </div>
      </div>

      <div class="recent-concerts">
        <h3 class="subsection-title">Concerts récents</h3>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Lieu</th>
                <th>Date</th>
                <th>Genre</th>
                <th>Places</th>
                <th>Popularité</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let concert of concerts.slice(0, 5)">
                <td>{{ concert.id }}</td>
                <td>{{ concert.lieu }}</td>
                <td>{{ concert.date }}</td>
                <td>
                  <span [class]="'badge ' + getGenreColor(concert.genre_musicale)">
                    {{ concert.genre_musicale }}
                  </span>
                </td>
                <td>{{ concert.nombre_place }}</td>
                <td>{{ concert.popularite }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CONCERTS VIEW -->
    <div *ngIf="activeView === 'concerts'" class="concerts-view">
      <div class="view-header">
        <h2 class="section-title">Gestion des Concerts</h2>
        <button (click)="openConcertForm()" class="btn-primary">
          + Nouveau Concert
        </button>
      </div>

      <div class="search-bar">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          placeholder="Rechercher un concert..."
          class="search-input"
        />
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Lieu</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Description</th>
              <th>Places</th>
              <th>Popularité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let concert of getFilteredConcerts()">
              <td>{{ concert.id }}</td>
              <td>{{ concert.lieu }}</td>
              <td>{{ concert.date }}</td>
              <td>
                <span [class]="'badge ' + getGenreColor(concert.genre_musicale)">
                  {{ concert.genre_musicale }}
                </span>
              </td>
              <td class="description-cell">{{ concert.description }}</td>
              <td>{{ concert.nombre_place }}</td>
              <td>{{ concert.popularite }}%</td>
              <td>
                <button (click)="openConcertForm(concert)" class="btn-edit">Modifier</button>
                <button (click)="deleteConcert(concert.id!)" class="btn-delete">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- CLIENTS VIEW -->
    <div *ngIf="activeView === 'clients'" class="clients-view">
      <div class="view-header">
        <h2 class="section-title">Gestion des Clients</h2>
        <button (click)="openClientForm()" class="btn-primary">
          + Nouveau Client
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Genre</th>
              <th>Âge</th>
              <th>Compte Bancaire</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let client of clients">
              <td>{{ client.id }}</td>
              <td>{{ client.nom }}</td>
              <td>{{ client.prenom }}</td>
              <td>{{ client.genre }}</td>
              <td>{{ client.age }}</td>
              <td>{{ client.compte_bancaire }}</td>
              <td>
                <button (click)="openClientForm(client)" class="btn-edit">Modifier</button>
                <button (click)="deleteClient(client.id!)" class="btn-delete">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ARTISTES VIEW -->
    <div *ngIf="activeView === 'artistes'" class="artistes-view">
      <div class="view-header">
        <h2 class="section-title">Gestion des Artistes</h2>
        <button (click)="openArtisteForm()" class="btn-primary">
          + Nouvel Artiste
        </button>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Genre</th>
              <th>Âge</th>
              <th>Nationalité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let artiste of artistes">
              <td>{{ artiste.id }}</td>
              <td>{{ artiste.nom }}</td>
              <td>{{ artiste.prenom }}</td>
              <td>{{ artiste.genre }}</td>
              <td>{{ artiste.age }}</td>
              <td>{{ artiste.nationalite }}</td>
              <td>
                <button (click)="openArtisteForm(artiste)" class="btn-edit">Modifier</button>
                <button (click)="deleteArtiste(artiste.id!)" class="btn-delete">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- TICKETS VIEW -->
    <div *ngIf="activeView === 'tickets'" class="tickets-view">
      <h2 class="section-title">Gestion des Tickets</h2>

      <div class="stat-card stat-green" style="max-width: 300px; margin-bottom: 2rem;">
        <div class="stat-value">{{ getTotalRevenue() }}€</div>
        <div class="stat-label">Revenu Total</div>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Prix</th>
              <th>Concert</th>
              <th>Client</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let ticket of tickets">
              <td>{{ ticket.id }}</td>
              <td>{{ ticket.prix }}€</td>
              <td>{{ ticket.concert?.lieu }}</td>
              <td>{{ ticket.client?.nom }} {{ ticket.client?.prenom }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Concert Form Modal -->
  <div *ngIf="showConcertForm" class="modal-overlay" (click)="showConcertForm = false">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ selectedConcert ? 'Modifier' : 'Nouveau' }} Concert</h3>
        <button (click)="showConcertForm = false" class="modal-close">×</button>
      </div>

      <form (ngSubmit)="saveConcert()" class="modal-form">
        <div class="form-group">
          <label>Lieu</label>
          <input type="text" [(ngModel)]="concertForm.lieu" name="lieu" required class="form-control">
        </div>

        <div class="form-group">
          <label>Date</label>
          <input type="date" [(ngModel)]="concertForm.date" name="date" required class="form-control">
        </div>

        <div class="form-group">
          <label>Genre Musical</label>
          <select [(ngModel)]="concertForm.genre_musicale" name="genre" required class="form-control">
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Électro">Électro</option>
            <option value="Jazz">Jazz</option>
            <option value="Hip-Hop">Hip-Hop</option>
          </select>
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea [(ngModel)]="concertForm.description" name="description" required class="form-control" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label>Nombre de places</label>
          <input type="number" [(ngModel)]="concertForm.nombre_place" name="places" required class="form-control">
        </div>

        <div class="form-group">
          <label>Popularité (%)</label>
          <input type="number" [(ngModel)]="concertForm.popularite" name="popularite" required class="form-control" min="0" max="100">
        </div>

        <div class="modal-actions">
          <button type="button" (click)="showConcertForm = false" class="btn-secondary">Annuler</button>
          <button type="submit" class="btn-primary">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Client Form Modal -->
  <div *ngIf="showClientForm" class="modal-overlay" (click)="showClientForm = false">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ selectedClient ? 'Modifier' : 'Nouveau' }} Client</h3>
        <button (click)="showClientForm = false" class="modal-close">×</button>
      </div>

      <form (ngSubmit)="saveClient()" class="modal-form">
        <div class="form-group">
          <label>Nom</label>
          <input type="text" [(ngModel)]="clientForm.nom" name="nom" required class="form-control">
        </div>

        <div class="form-group">
          <label>Prénom</label>
          <input type="text" [(ngModel)]="clientForm.prenom" name="prenom" required class="form-control">
        </div>

        <div class="form-group">
          <label>Genre</label>
          <select [(ngModel)]="clientForm.genre" name="genre" required class="form-control">
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div class="form-group">
          <label>Âge</label>
          <input type="number" [(ngModel)]="clientForm.age" name="age" required class="form-control">
        </div>

        <div class="form-group">
          <label>Compte Bancaire</label>
          <input type="text" [(ngModel)]="clientForm.compte_bancaire" name="compte" required class="form-control">
        </div>

        <div class="modal-actions">
          <button type="button" (click)="showClientForm = false" class="btn-secondary">Annuler</button>
          <button type="submit" class="btn-primary">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Artiste Form Modal -->
  <div *ngIf="showArtisteForm" class="modal-overlay" (click)="showArtisteForm = false">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ selectedArtiste ? 'Modifier' : 'Nouvel' }} Artiste</h3>
        <button (click)="showArtisteForm = false" class="modal-close">×</button>
      </div>

      <form (ngSubmit)="saveArtiste()" class="modal-form">
        <div class="form-group">
          <label>Nom</label>
          <input type="text" [(ngModel)]="artisteForm.nom" name="nom" required class="form-control">
        </div>

        <div class="form-group">
          <label>Prénom</label>
          <input type="text" [(ngModel)]="artisteForm.prenom" name="prenom" required class="form-control">
        </div>

        <div class="form-group">
          <label>Genre</label>
          <select [(ngModel)]="artisteForm.genre" name="genre" required class="form-control">
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div class="form-group">
          <label>Âge</label>
          <input type="number" [(ngModel)]="artisteForm.age" name="age" required class="form-control">
        </div>

        <div class="form-group">
          <label>Nationalité</label>
          <input type="text" [(ngModel)]="artisteForm.nationalite" name="nationalite" required class="form-control">
        </div>

        <div class="modal-actions">
          <button type="button" (click)="showArtisteForm = false" class="btn-secondary">Annuler</button>
          <button type="submit" class="btn-primary">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

---

## Suite du code dans le prochain fichier...
