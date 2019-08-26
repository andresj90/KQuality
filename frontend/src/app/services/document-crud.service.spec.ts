import { TestBed } from '@angular/core/testing';

import { DocumentCRUDService } from './document-crud.service';

describe('DocumentCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentCRUDService = TestBed.get(DocumentCRUDService);
    expect(service).toBeTruthy();
  });
});
