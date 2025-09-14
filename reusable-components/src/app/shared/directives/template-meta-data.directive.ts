import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateMetaData]',
})
export class TemplateMetaDataDirective {
  templateMetaData = input<string>();
  template = inject(TemplateRef<any>);

  constructor() {}
}

//directive’s main job is: capture the template fragment (TemplateRef) so it can be rendered later using ngTemplateOutlet or other logic.
