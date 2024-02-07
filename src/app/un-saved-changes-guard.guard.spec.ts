import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { unSavedChangesGuardGuard } from './un-saved-changes-guard.guard';

describe('unSavedChangesGuardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unSavedChangesGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
