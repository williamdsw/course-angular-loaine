import { TestBed } from '@angular/core/testing';

import { DiretivaNgifService } from './diretiva-ngif.service';

describe('DiretivaNgifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretivaNgifService = TestBed.inject(DiretivaNgifService);
    expect(service).toBeTruthy();
  });
});
