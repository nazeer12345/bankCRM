import { CanActivateFn, ResolveFn } from '@angular/router';

export const passdataGuard: ResolveFn<any> = (route, state) => {
  return true;
};
