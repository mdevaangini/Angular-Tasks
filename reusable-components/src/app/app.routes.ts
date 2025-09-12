import { Routes } from '@angular/router';
import { TableV1Component } from './shared/table-v1/table.component';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
