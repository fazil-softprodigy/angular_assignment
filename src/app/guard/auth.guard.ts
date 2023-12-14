import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {

  const storageData = JSON.parse(localStorage.getItem('login') || '');
  if (storageData && storageData.login === true) {
    return true;
  }
  return false;
};
