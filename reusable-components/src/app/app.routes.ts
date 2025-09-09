import { Routes } from '@angular/router';
import { TableComponent } from './shared/table/table.component';

export const routes: Routes = [
  {
    path: 'table',
    loadComponent: () => TableComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
