import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ArtisteService } from './artiste';

describe('ArtisteService', () => {
  let service: ArtisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ArtisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
