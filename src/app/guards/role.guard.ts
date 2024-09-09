import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const expectedRoles = childRoute.data['roles'] as Array<string>;

  if (!expectedRoles || expectedRoles.includes(inject(AuthService).getUserRole())) {
    return true;
  }

  inject(Router).navigate(['/unauthorized']);
  return false;
};
