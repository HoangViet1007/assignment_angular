import { TestBed } from '@angular/core/testing';

import { CategoryesService } from './categoryes.service';

describe('CategoryesService', () => {
  let service: CategoryesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
