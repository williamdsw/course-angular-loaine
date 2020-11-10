import { TestBed } from '@angular/core/testing';

import { DropdownService } from './dropdown.service';

describe('DropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownService = TestBed.inject(DropdownService);
    expect(service).toBeTruthy();
  });
});
