import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { AuthService } from '../core/services/auth.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { ArtisteApiService } from '../core/services/artiste-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';
import { GestionnaireApiService } from '../core/services/gestionnaire-api.service';
import { ClientApiService } from '../core/services/client-api.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: {
            currentSession: { role: 'user', id: 1, email: 'user@example.com', displayName: 'User Demo', source: 'client' },
            session$: of(null),
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

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
