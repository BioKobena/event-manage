import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, finalize, forkJoin, of, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { Concert } from '../core/models/concert.model';
import { Ticket } from '../core/models/ticket.model';

@Component({
  selector: 'app-concert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './concert.component.html',
  styleUrl: './concert.component.css'
})
export class ConcertComponent implements OnInit {
  concerts: Concert[] = [];
  genres: string[] = ['Tous'];
  selectedGenre = 'Tous';
  ticketMap = new Map<number, Ticket[]>();
  isLoading = true;
  errorMessage = '';

  newConcert: Partial<Concert> = {
    lieu: '',
    date: '',
    genreMusicale: '',
    description: '',
    nombrePlace: 0,
    prixTicket: 0
  };

  private resetForm(): void {
    this.newConcert = {
      lieu: '',
      date: '',
      genreMusicale: '',
      description: '',
      nombrePlace: 0,
      prixTicket: 0
    };
  }

  constructor(
    private readonly concertApi: ConcertApiService,
    private readonly ticketApi: TicketApiService,
    readonly auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loadConcerts();
  }

  get filteredConcerts(): Concert[] {
    return this.selectedGenre === 'Tous'
      ? this.concerts
      : this.concerts.filter((concert) => concert.genreMusicale === this.selectedGenre);
  }

  setGenre(genre: string): void {
    this.selectedGenre = genre;
  }

  remainingTickets(concertId: number): number {
    return this.availableTickets(concertId).length;
  }

  availabilityLabel(concert: Concert): string {
    const remaining = this.remainingTickets(concert.id);

    if (remaining <= 0) {
      return 'Complet';
    }

    if (remaining <= 5) {
      return 'Dernières places';
    }

    return `${remaining} places disponibles`;
  }

  reserve(concert: Concert): void {
    const session = this.auth.currentSession;

    if (!session || session.role !== 'user') {
      return;
    }

    const ticket = this.availableTickets(concert.id)[0];

    if (!ticket) {
      this.errorMessage = 'Aucun billet disponible pour ce concert.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.ticketApi
      .buy(ticket.id, session.id)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
        next: () => this.loadConcerts(),
        error: () => {
          this.errorMessage = 'La réservation a échoué. Réessayez.';
        }
      });
  }

  private loadConcerts(): void {
    this.concertApi
      .getAll()
      .pipe(
        switchMap((concerts) => {
          this.concerts = concerts;
          this.genres = [
            'Tous',
            ...Array.from(
              new Set(
                concerts
                  .map((concert) => concert.genreMusicale)
                  .filter((genre): genre is string => Boolean(genre))
              )
            )
          ];

          if (concerts.length === 0) {
            this.ticketMap = new Map<number, Ticket[]>();
            return of([] as Ticket[][]);
          }

          return forkJoin(
            concerts.map((concert) =>
              this.ticketApi.getByConcert(concert.id).pipe(
                catchError(() => of([] as Ticket[]))
              )
            )
          );
        })
      )
      .subscribe({
        next: (ticketLists) => {
          const nextMap = new Map<number, Ticket[]>();

          this.concerts.forEach((concert, index) => {
            nextMap.set(concert.id, ticketLists[index] ?? []);
          });

          this.ticketMap = nextMap;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Impossible de charger le catalogue de concerts.';
          this.isLoading = false;
        }
      });
  }

  private availableTickets(concertId: number): Ticket[] {
    return (this.ticketMap.get(concertId) ?? []).filter((ticket) => !ticket.client);
  }


  createConcert(): void {
    if (!this.auth.hasRole('admin')) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.concertApi.create(this.newConcert as Concert)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => {
          this.resetForm();
          this.loadConcerts();
        },
        error: () => {
          this.errorMessage = 'Création du concert échouée.';
        }
      });
  }
}
