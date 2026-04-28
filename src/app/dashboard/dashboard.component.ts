import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ClientApiService } from '../core/services/client-api.service';
import { AuthService } from '../core/services/auth.service';
import { ArtisteApiService } from '../core/services/artiste-api.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { GestionnaireApiService } from '../core/services/gestionnaire-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { Ticket } from '../core/models/ticket.model';

interface DashboardStat {
  label: string;
  value: string;
  note: string;
}

interface DashboardPathway {
  tag: string;
  title: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  stats: DashboardStat[] = [];
  pathways: DashboardPathway[] = [];
  milestones: string[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly concertApi: ConcertApiService,
    private readonly artisteApi: ArtisteApiService,
    private readonly ticketApi: TicketApiService,
    private readonly gestionnaireApi: GestionnaireApiService,
    private readonly clientApi: ClientApiService
  ) {}

  ngOnInit(): void {
    forkJoin({
      concerts: this.concertApi.getAll(),
      artistes: this.artisteApi.getAll(),
      tickets: this.ticketApi.getAll(),
      gestionnaires: this.gestionnaireApi.getAll(),
      clients: this.clientApi.getAll()
    }).subscribe({
      next: ({ concerts, artistes, tickets, gestionnaires, clients }) => {
        const soldTickets = tickets.filter((ticket: Ticket) => Boolean(ticket.client)).length;
        const availableTickets = Math.max(0, tickets.length - soldTickets);
        const role = this.auth.currentSession?.role;

        this.stats = [
          {
            label: 'Concerts programmés',
            value: String(concerts.length),
            note: 'Programmation active et synchronisée avec le backend'
          },
          {
            label: 'Billets vendus',
            value: String(soldTickets),
            note: `${availableTickets} billets encore disponibles`
          },
          {
            label: 'Artistes suivis',
            value: String(artistes.length),
            note: 'Répertoire alimenté depuis l’API'
          },
          {
            label: 'Clients et gestionnaires',
            value: `${clients.length} / ${gestionnaires.length}`,
            note: 'Base métier connectée au backend'
          }
        ];

        this.pathways = role === 'admin'
          ? [
              {
                tag: 'Admin',
                title: 'Espace administrateur',
                text: 'Superviser les concerts, les artistes et les opérations de gestion.',
                link: '/gestionnaire'
              },
              {
                tag: 'Back-office',
                title: 'Pilotage des billets',
                text: 'Contrôler les volumes et les réservations déjà prises.',
                link: '/gestionnaire'
              }
            ]
          : [
              {
                tag: 'User',
                title: 'Parcours utilisateur',
                text: 'Consulter les concerts et réserver directement depuis le catalogue.',
                link: '/concerts'
              },
              {
                tag: 'User',
                title: 'Mes billets',
                text: 'Suivre vos achats et retrouver les billets rattachés à votre compte.',
                link: '/tickets'
              }
            ];

        this.milestones = [
          'Données synchronisées avec le backend REST.',
          'Séparation claire entre les parcours utilisateur et administrateur.',
          'Navigation sobre, lisible et prête pour la réservation.'
        ];

        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le tableau de bord pour le moment.';
        this.isLoading = false;
      }
    });
  }
}
