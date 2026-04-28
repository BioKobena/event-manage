import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { AuthService } from '../core/services/auth.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { ArtisteApiService } from '../core/services/artiste-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { GestionnaireApiService } from '../core/services/gestionnaire-api.service';
import { ClientApiService } from '../core/services/client-api.service';
import { Gestionnaire } from '../core/models/gestionnaire.model';

@Component({
  selector: 'app-gestionnaire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestionnaire.component.html',
  styleUrl: './gestionnaire.component.css'
})
export class GestionnaireComponent implements OnInit {
  kpis: { label: string; value: string }[] = [];
  actions: string[] = [];
  gestionnaires: Gestionnaire[] = [];
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
    if (!this.auth.hasRole('admin')) {
      this.isLoading = false;
      this.errorMessage = 'L’accès administrateur est requis.';
      return;
    }

    forkJoin({
      concerts: this.concertApi.getAll(),
      artistes: this.artisteApi.getAll(),
      tickets: this.ticketApi.getAll(),
      gestionnaires: this.gestionnaireApi.getAll(),
      clients: this.clientApi.getAll()
    }).subscribe({
      next: ({ concerts, artistes, tickets, gestionnaires, clients }) => {
        const soldTickets = tickets.filter((ticket) => Boolean(ticket.client)).length;

        this.kpis = [
          { label: 'Concerts en suivi', value: String(concerts.length) },
          { label: 'Tickets gérés', value: String(soldTickets) },
          { label: 'Artistes actifs', value: String(artistes.length) },
          { label: 'Clients enregistrés', value: String(clients.length) }
        ];

        this.gestionnaires = gestionnaires;
        this.actions = [
          `Vérifier les ${concerts.length} concerts programmés.`,
          `Confirmer les ${soldTickets} billets déjà vendus.`,
          'Mettre à jour les fiches artistes synchronisées avec l’API.',
          `Suivre les ${gestionnaires.length} gestionnaires actifs.`
        ];
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le tableau de bord administrateur.';
        this.isLoading = false;
      }
    });
  }
}
