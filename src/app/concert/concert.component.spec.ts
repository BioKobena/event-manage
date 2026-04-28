import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConcertComponent } from './concert.component';
import { AuthService } from '../core/services/auth.service';
import { ConcertApiService } from '../core/services/concert-api.service';
import { TicketApiService } from '../core/services/ticket-api.service';

describe('ConcertComponent', () => {
  let component: ConcertComponent;
  let fixture: ComponentFixture<ConcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {
            currentSession: { role: 'user', id: 1, email: 'user@example.com', displayName: 'User Demo', source: 'client' },
            hasRole: jasmine.createSpy('hasRole').and.returnValue(true)
          }
        },
        { provide: ConcertApiService, useValue: { getAll: () => of([{ id: 1, lieu: 'Paris', date: '2026-06-01', genreMusicale: 'Pop', description: 'Demo', popularite: 50, nombrePlace: 100, prixTicket: 42 }]) } },
        { provide: TicketApiService, useValue: { getByConcert: () => of([]), buy: () => of({}) } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
