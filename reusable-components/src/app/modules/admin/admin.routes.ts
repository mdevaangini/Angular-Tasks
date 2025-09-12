import { Route } from '@angular/router';

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'popup-ngContent',
    loadComponent: () =>
      import('./pages/pop-up-ng-content/pop-up-ng-content.component').then(
        (m) => m.PopUpNgContentPage
      ),
  },
  {
    path: 'popup-ngTemplateOutlet',
    loadComponent: () =>
      import(
        './pages/pop-up-ng-template-outlet/pop-up-ng-template-outlet.component'
      ).then((m) => m.PopUpNgTemplateOutletPage),
  },
  {
    path: 'pagination-v1',
    loadComponent: () =>
      import('./pages/pagination-v1/pagination-v1.component').then(
        (m) => m.PaginationV1Page
      ),
  },
  {
    path: 'pagination-v2',
    loadComponent: () =>
      import('./pages/pagination-v2/pagination-v2.component').then(
        (m) => m.PaginationV2Page
      ),
  },
  {
    path: 'table-v1',
    loadComponent: () =>
      import('./pages/table-v1/table.component').then((m) => m.TableV1Page),
  },
  {
    path: 'table-v2',
    loadComponent: () =>
      import('./pages/table-v2/table-v2.component').then((m) => m.TableV2Page),
  },
];
