import { Injectable } from '@angular/core';
import { loadPermission } from '../model/permission';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  permissions: any = loadPermission();

  hasPermission(module: string, feature?: string): boolean {
    const modulePermission = this.permissions[module];
    if (!modulePermission) return false;

    // When module has "allowed" property
    if ('allowed' in modulePermission) {
      if (feature && modulePermission[feature]) {
        const featurePerm = modulePermission[feature];
        return (
          modulePermission.allowed === true &&
          (featurePerm.read === true || featurePerm.write === true)
        );
      }
      return modulePermission.allowed === true;
    }

    // When module directly has read/write
    return modulePermission.read === true || modulePermission.write === true;
  }
}
