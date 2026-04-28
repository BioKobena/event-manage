import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ArtisteApiService } from '../core/services/artiste-api.service';
import { AuthService } from '../core/services/auth.service';
import { Artiste } from '../core/models/artiste.model';

@Component({
  selector: 'app-artiste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artiste.component.html',
  styleUrl: './artiste.component.css'
})
export class ArtisteComponent implements OnInit {
  artists: Artiste[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private readonly artisteApi: ArtisteApiService,
    readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.artisteApi.getAll().subscribe({
      next: (artists) => {
        this.artists = artists;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les artistes.';
        this.isLoading = false;
      }
    });
  }
}
