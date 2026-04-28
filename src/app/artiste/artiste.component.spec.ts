import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ArtisteComponent } from './artiste.component';
import { ArtisteApiService } from '../core/services/artiste-api.service';
import { AuthService } from '../core/services/auth.service';

describe('ArtisteComponent', () => {
  let component: ArtisteComponent;
  let fixture: ComponentFixture<ArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisteComponent],
      providers: [
        { provide: ArtisteApiService, useValue: { getAll: () => of([]) } },
        {
          provide: AuthService,
          useValue: {
            currentSession: { role: 'user', id: 1, email: 'user@example.com', displayName: 'User Demo', source: 'client' }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
