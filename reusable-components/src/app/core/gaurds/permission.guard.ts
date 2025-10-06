import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { Module } from '../model/permission';

export function permissionGuard(module: Module, feature?: string): CanMatchFn {
  return (route, state) => {
    const router = inject(Router);
    const ps = inject(PermissionService);

    return (
      ps.hasPermission(module, feature) || router.createUrlTree(['/admin'])
    );
  };
}
