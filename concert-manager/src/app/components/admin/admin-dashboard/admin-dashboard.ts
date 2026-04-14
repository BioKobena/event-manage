import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { ConcertService } from '../../../services/concert';
import { ClientService } from '../../../services/client';
import { ArtisteService } from '../../../services/artiste';
import { TicketService } from '../../../services/ticket';
import { Concert } from '../../../models/concert.model';
import { Client } from '../../../models/client.model';
import { Artiste } from '../../../models/artiste.model';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
})
export class AdminDashboardComponent implements OnInit {
  activeView: 'dashboard' | 'concerts' | 'clients' | 'artistes' | 'tickets' = 'dashboard';

  concerts: Concert[] = [];
  clients: Client[] = [];
  artistes: Artiste[] = [];
  tickets: Ticket[] = [];

  showConcertForm: boolean = false;
  selectedConcert: Concert | null = null;
  concertForm: Concert = new Concert();

  showClientForm: boolean = false;
  selectedClient: Client | null = null;
  clientForm: Client = new Client();

  showArtisteForm: boolean = false;
  selectedArtiste: Artiste | null = null;
  artisteForm: Artiste = new Artiste();

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
    this.concertService.getAllConcerts().subscribe((data) => {
      this.concerts = data;
    });
    this.clientService.getAllClients().subscribe((data) => {
      this.clients = data;
    });
    this.artisteService.getAllArtistes().subscribe((data) => {
      this.artistes = data;
    });
    this.ticketService.getAllTickets().subscribe((data) => {
      this.tickets = data;
    });
  }

  setActiveView(view: 'dashboard' | 'concerts' | 'clients' | 'artistes' | 'tickets'): void {
    this.activeView = view;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openConcertForm(concert?: Concert): void {
    if (concert) {
      this.selectedConcert = concert;
      this.concertForm = new Concert({ ...concert });
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

  openClientForm(client?: Client): void {
    if (client) {
      this.selectedClient = client;
      this.clientForm = new Client({ ...client });
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

  openArtisteForm(artiste?: Artiste): void {
    if (artiste) {
      this.selectedArtiste = artiste;
      this.artisteForm = new Artiste({ ...artiste });
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

  deleteTicket(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce ticket ?')) {
      this.ticketService.deleteTicket(id);
      this.loadData();
    }
  }

  getTotalRevenue(): number {
    return this.ticketService.getTotalRevenue();
  }

  getFilteredConcerts(): Concert[] {
    if (!this.searchTerm) {
      return this.concerts;
    }
    return this.concertService.searchConcerts(this.searchTerm);
  }

  getGenreColor(genre: string): string {
    const colors: { [key: string]: string } = {
      Rock: 'bg-red-100 text-red-800',
      Pop: 'bg-pink-100 text-pink-800',
      Électro: 'bg-blue-100 text-blue-800',
      Jazz: 'bg-yellow-100 text-yellow-800',
      'Hip-Hop': 'bg-purple-100 text-purple-800'
    };
    return colors[genre] || 'bg-gray-100 text-gray-800';
  }
}
