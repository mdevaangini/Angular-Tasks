import { Injectable } from '@angular/core';
import { loadPermission, Module } from '../model/permission';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  permissions: any;

  async loadPermissionData() {
    this.permissions = await loadPermission();
  }

  hasPermission(module: Module, feature?: string): boolean {
    const modulePermission = this.permissions[module];
    if (!modulePermission) return false;

    // When module have features
    if ('allowed' in modulePermission) {
      if (modulePermission.allowed) {
        if (feature && modulePermission[feature]) {
          const featurePerm = modulePermission[feature];
          return featurePerm.read || featurePerm.write;
        }
      }

      return modulePermission.allowed;
    }

    // When module does not have any feature
    return modulePermission.read || modulePermission.write;
  }
}
