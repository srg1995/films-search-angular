import { TestBed } from '@angular/core/testing';

import { GetFilms } from './film.service';

describe('GetFilms', () => {
  let service: GetFilms;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilms);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
