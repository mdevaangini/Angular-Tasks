import { Route } from '@angular/router';

export const FORM_ROUTES: Route[] = [
  {
    path: 'edit',
    loadComponent: () =>
      import('../form-v1/edit-form/edit-form.component').then(
        (m) => m.EditFormPage
      ),
  },
];
