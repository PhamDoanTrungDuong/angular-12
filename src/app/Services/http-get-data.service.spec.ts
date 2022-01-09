import { TestBed } from '@angular/core/testing';

import { HttpGetDataService } from './http-get-data.service';

describe('HttpGetDataService', () => {
  let service: HttpGetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
