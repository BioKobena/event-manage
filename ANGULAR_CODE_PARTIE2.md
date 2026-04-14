# CODE ANGULAR COMPLET - PARTIE 2

## FICHIER: admin-dashboard.component.css

```css
/* src/app/components/admin/admin-dashboard/admin-dashboard.component.css */

.admin-container {
  min-height: 100vh;
  background-color: #f9fafb;
}

.admin-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-icon {
  width: 2.5rem;
  height: 2.5rem;
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.header-subtitle {
  font-size: 0.875rem;
  opacity: 0.9;
  margin: 0;
}

.header-nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-btn.active {
  background: white;
  color: #667eea;
}

.logout-btn {
  margin-left: 1rem;
  background: rgba(255, 255, 255, 0.2);
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.stat-blue {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
}

.stat-green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.stat-purple {
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
}

.stat-orange {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.stat-value {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* Tables */
.table-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  background-color: #f3f4f6;
}

.data-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

.data-table td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  color: #6b7280;
}

.data-table tbody tr:hover {
  background-color: #f9fafb;
}

.description-cell {
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Badges */
.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
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

.bg-gray-100 {
  background-color: #f3f4f6;
}

.text-gray-800 {
  color: #1f2937;
}

/* View Header */
.view-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

/* Search Bar */
.search-bar {
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Buttons */
.btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #d1d5db;
}

.btn-edit {
  padding: 0.375rem 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn-edit:hover {
  background: #2563eb;
}

.btn-delete {
  padding: 0.375rem 0.75rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.btn-delete:hover {
  background: #dc2626;
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
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: #111827;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-control {
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }

  .header-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .table-container {
    overflow-x: auto;
  }

  .data-table {
    min-width: 800px;
  }
}
```

---

## FICHIER: concert-catalog.component.ts (Interface Utilisateur)

```typescript
// src/app/components/user/concert-catalog/concert-catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcertService } from '../../../services/concert.service';
import { TicketService } from '../../../services/ticket.service';
import { AuthService } from '../../../services/auth.service';
import { Concert } from '../../../models/concert.model';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-concert-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './concert-catalog.component.html',
  styleUrls: ['./concert-catalog.component.css']
})
export class ConcertCatalogComponent implements OnInit {
  concerts: Concert[] = [];
  filteredConcerts: Concert[] = [];
  selectedGenre: string = 'Tous';
  searchTerm: string = '';
  selectedConcert: Concert | null = null;
  showBookingModal: boolean = false;

  genres: string[] = ['Tous', 'Rock', 'Pop', 'Électro', 'Jazz', 'Hip-Hop'];

  constructor(
    private concertService: ConcertService,
    private ticketService: TicketService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadConcerts();
  }

  loadConcerts(): void {
    this.concertService.getAllConcerts().subscribe(data => {
      this.concerts = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filtered = this.concerts;

    // Filter by genre
    if (this.selectedGenre !== 'Tous') {
      filtered = filtered.filter(c => c.genre_musicale === this.selectedGenre);
    }

    // Filter by search term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(c =>
        c.lieu.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term) ||
        c.genre_musicale.toLowerCase().includes(term)
      );
    }

    this.filteredConcerts = filtered;
  }

  selectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.applyFilters();
  }

  searchConcerts(): void {
    this.applyFilters();
  }

  openBookingModal(concert: Concert): void {
    this.selectedConcert = concert;
    this.showBookingModal = true;
  }

  bookTicket(): void {
    if (!this.selectedConcert) return;

    const currentUser = this.authService.currentUserValue as Client;
    if (!currentUser) {
      alert('Vous devez être connecté pour réserver un ticket');
      return;
    }

    const prix = this.calculatePrice(this.selectedConcert);
    this.ticketService.reserveTicket(this.selectedConcert, currentUser, prix);

    alert('Ticket réservé avec succès !');
    this.showBookingModal = false;
    this.router.navigate(['/user/tickets']);
  }

  calculatePrice(concert: Concert): number {
    // Prix basé sur la popularité et le type de lieu
    const basePrice = 50;
    const popularityMultiplier = 1 + (concert.popularite / 100);
    return Math.round(basePrice * popularityMultiplier);
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

  getGenreGradient(genre: string): string {
    const gradients: { [key: string]: string } = {
      'Rock': 'from-red-500 to-orange-600',
      'Pop': 'from-pink-500 to-purple-600',
      'Électro': 'from-blue-500 to-cyan-600',
      'Jazz': 'from-yellow-500 to-orange-500',
      'Hip-Hop': 'from-purple-500 to-pink-600'
    };
    return gradients[genre] || 'from-gray-500 to-gray-600';
  }
}
```

---

## FICHIER: concert-catalog.component.html

```html
<!-- src/app/components/user/concert-catalog/concert-catalog.component.html -->
<div class="catalog-container">
  <!-- Search Bar -->
  <div class="search-section">
    <div class="search-wrapper">
      <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input
        type="text"
        [(ngModel)]="searchTerm"
        (ngModelChange)="searchConcerts()"
        placeholder="Rechercher par artiste, lieu ou genre..."
        class="search-input"
      />
    </div>
  </div>

  <!-- Genre Filters -->
  <div class="genre-filters">
    <button
      *ngFor="let genre of genres"
      (click)="selectGenre(genre)"
      [class]="selectedGenre === genre ? 'genre-btn active' : 'genre-btn'"
    >
      {{ genre }}
    </button>
  </div>

  <!-- Concerts Grid -->
  <div class="concerts-grid">
    <div *ngFor="let concert of filteredConcerts" class="concert-card">
      <!-- Concert Image -->
      <div [class]="'concert-image gradient-' + getGenreGradient(concert.genre_musicale)">
        <svg class="music-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
        </svg>
      </div>

      <!-- Concert Details -->
      <div class="concert-content">
        <div class="concert-header">
          <h3 class="concert-title">{{ concert.lieu }}</h3>
          <span [class]="'genre-badge ' + getGenreColor(concert.genre_musicale)">
            {{ concert.genre_musicale }}
          </span>
        </div>

        <div class="concert-info">
          <div class="info-item">
            <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span>{{ concert.date }}</span>
          </div>

          <div class="info-item">
            <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{{ concert.lieu }}</span>
          </div>
        </div>

        <p class="concert-description">{{ concert.description }}</p>

        <!-- Popularity Bar -->
        <div class="popularity-section">
          <div class="popularity-label">
            <svg class="popularity-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <span>Popularité</span>
          </div>
          <div class="popularity-bar">
            <div class="popularity-fill" [style.width.%]="concert.popularite"></div>
          </div>
          <span class="popularity-value">{{ concert.popularite }}%</span>
        </div>

        <!-- Footer -->
        <div class="concert-footer">
          <div class="price-section">
            <div class="price-label">À partir de</div>
            <div class="price-value">{{ calculatePrice(concert) }}€</div>
          </div>
          <button (click)="openBookingModal(concert)" class="book-btn">
            Réserver
            <svg class="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div class="places-info">
          {{ concert.nombre_place }} places disponibles
        </div>
      </div>
    </div>
  </div>

  <!-- No Results -->
  <div *ngIf="filteredConcerts.length === 0" class="no-results">
    <svg class="no-results-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3>Aucun concert trouvé</h3>
    <p>Essayez de modifier vos critères de recherche</p>
  </div>

  <!-- Booking Modal -->
  <div *ngIf="showBookingModal" class="modal-overlay" (click)="showBookingModal = false">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <div class="modal-header">
        <h3>Réserver votre ticket</h3>
        <button (click)="showBookingModal = false" class="modal-close">×</button>
      </div>

      <div *ngIf="selectedConcert" class="booking-details">
        <div class="booking-info">
          <h4>{{ selectedConcert.lieu }}</h4>
          <p><strong>Date :</strong> {{ selectedConcert.date }}</p>
          <p><strong>Genre :</strong> {{ selectedConcert.genre_musicale }}</p>
          <p><strong>Description :</strong> {{ selectedConcert.description }}</p>
        </div>

        <div class="booking-price">
          <div class="price-label">Prix du ticket</div>
          <div class="price-value">{{ calculatePrice(selectedConcert) }}€</div>
        </div>

        <div class="booking-actions">
          <button (click)="showBookingModal = false" class="btn-secondary">Annuler</button>
          <button (click)="bookTicket()" class="btn-primary">Confirmer la réservation</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## Suite dans le prochain fichier...
