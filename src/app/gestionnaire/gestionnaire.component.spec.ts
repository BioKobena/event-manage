import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GestionnaireComponent } from './gestionnaire.component';
import { AuthService } from '../core/services/auth.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { ArtisteApiService } from '../core/services/artiste-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { GestionnaireApiService } from '../core/services/gestionnaire-api.service';
import { ClientApiService } from '../core/services/client-api.service';

describe('GestionnaireComponent', () => {
  let component: GestionnaireComponent;
  let fixture: ComponentFixture<GestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionnaireComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {
            currentSession: { role: 'admin', id: 1, email: 'admin@example.com', displayName: 'Admin Demo', source: 'gestionnaire' },
            hasRole: jasmine.createSpy('hasRole').and.returnValue(true)
          }
        },
        { provide: ConcertApiService, useValue: { getAll: () => of([]) } },
        { provide: ArtisteApiService, useValue: { getAll: () => of([]) } },
        { provide: TicketApiService, useValue: { getAll: () => of([]) } },
        { provide: GestionnaireApiService, useValue: { getAll: () => of([]) } },
        { provide: ClientApiService, useValue: { getAll: () => of([]) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
