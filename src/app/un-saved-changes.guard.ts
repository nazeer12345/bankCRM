import { CanActivateFn } from '@angular/router';

export const unSavedChangesGuard: CanActivateFn = (route, state) => {
  return true;
};
