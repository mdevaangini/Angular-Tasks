import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const access = route.data['access'];
  return access === 'YES';
};
