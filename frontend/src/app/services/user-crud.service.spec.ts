import { TestBed } from '@angular/core/testing';

import { UserCRUDService } from './user-crud.service';

describe('UserCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCRUDService = TestBed.get(UserCRUDService);
    expect(service).toBeTruthy();
  });
});
