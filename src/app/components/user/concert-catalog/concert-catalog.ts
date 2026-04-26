import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConcertService } from '../../../services/concert';
import { TicketService } from '../../../services/ticket';
import { AuthService } from '../../../services/auth';
import { Concert } from '../../../models/concert.model';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-concert-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './concert-catalog.html',
  styleUrls: ['./concert-catalog.css']
})
export class ConcertCatalogComponent implements OnInit {
  searchTerm: string = '';
  selectedGenre: string = 'Tous';
  showBookingModal: boolean = false;
  selectedConcert: Concert | null = null;
  ticketPrice: number = 0;
  bookedMessage: string = '';
  concerts: Concert[] = [];
  filteredConcerts: Concert[] = [];

  constructor(
    private concertService: ConcertService,
    private ticketService: TicketService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadConcerts();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get isUser(): boolean {
    return this.authService.userRoleValue === 'user';
  }

  loadConcerts(): void {
    this.concertService.getAllConcerts().subscribe((data) => {
      this.concerts = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredConcerts = this.concerts.filter((concert) => {
      const matchSearch = this.searchTerm
        ? concert.lieu.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          concert.genre_musicale.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          concert.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
      const matchGenre = this.selectedGenre === 'Tous' || concert.genre_musicale === this.selectedGenre;
      return matchSearch && matchGenre;
    });
  }

  setGenre(genre: string): void {
    this.selectedGenre = genre;
    this.applyFilters();
  }

  openBooking(concert: Concert): void {
    if (!this.isUser) {
      this.router.navigate(['/login']);
      return;
    }

    this.selectedConcert = concert;
    this.ticketPrice = concert.prix;
    this.bookedMessage = '';
    this.showBookingModal = true;
  }

  closeBooking(): void {
    this.showBookingModal = false;
    this.selectedConcert = null;
  }

  bookTicket(): void {
    const currentUser = this.authService.currentUserValue as Client | null;
    if (!currentUser || !this.isUser) {
      this.router.navigate(['/login']);
      return;
    }

    if (this.selectedConcert) {
      this.ticketService.reserveTicket(this.selectedConcert, currentUser, this.ticketPrice);
      this.bookedMessage = `Réservation confirmée pour ${this.selectedConcert.lieu} !`;
      this.showBookingModal = false;
    }
  }

  getGenres(): string[] {
    return ['Tous', 'Rock', 'Pop', 'Électro', 'Jazz', 'Hip-Hop', 'Classique'];
  }

  getBannerClass(genre: string): string {
    switch (genre) {
      case 'Rock':
        return 'gradient-from-red-500-to-orange-600';
      case 'Pop':
        return 'gradient-from-pink-500-to-purple-600';
      case 'Électro':
        return 'gradient-from-blue-500-to-cyan-600';
      case 'Jazz':
        return 'gradient-from-yellow-500-to-orange-500';
      case 'Hip-Hop':
        return 'gradient-from-purple-500-to-pink-600';
      default:
        return 'gradient-from-blue-500-to-cyan-600';
    }
  }

  getBadgeClass(genre: string): string {
    switch (genre) {
      case 'Rock':
        return 'bg-red-100 text-red-800';
      case 'Pop':
        return 'bg-pink-100 text-pink-800';
      case 'Électro':
        return 'bg-blue-100 text-blue-800';
      case 'Jazz':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hip-Hop':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getPopularityWidth(popularite: number): string {
    return Math.min(Math.max(popularite, 0), 100) + '%';
  }
}
