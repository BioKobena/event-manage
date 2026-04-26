import { TestBed } from '@angular/core/testing';

import { Artiste } from './artiste';

describe('Artiste', () => {
  let service: Artiste;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Artiste);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
