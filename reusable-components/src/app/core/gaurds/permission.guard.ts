import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService } from '../services/permission.service';

export function permissionGuard(
  module: string,
  feature?: string
): CanActivateFn {
  return (route, state) => {
    const ps = inject(PermissionService);

    return ps.hasPermission(module, feature);
  };
}
