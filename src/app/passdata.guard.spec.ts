import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { passdataGuard } from './passdata.guard';

describe('passdataGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => passdataGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
