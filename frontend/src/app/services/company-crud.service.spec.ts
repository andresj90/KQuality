import { TestBed } from '@angular/core/testing';

import { CompanyCRUDService } from './company-crud.service';

describe('CompanyCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyCRUDService = TestBed.get(CompanyCRUDService);
    expect(service).toBeTruthy();
  });
});
