import { TestBed, async, inject } from '@angular/core/testing';

import { AlunosDeactivateGuard } from './alunos-deactivate.guard';

describe('AlunoDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunosDeactivateGuard]
    });
  });

  it('should ...', inject([AlunosDeactivateGuard], (guard: AlunosDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
