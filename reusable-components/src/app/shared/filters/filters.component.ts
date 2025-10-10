import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, input, output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'dm-filters',
  imports: [ReactiveFormsModule, NgTemplateOutlet],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {

  filtersMetaData=input.required<any>();
  filterFormGroup = new FormGroup({});
  inputsTemplate = contentChild(TemplateRef<any | undefined>)
  search = output<boolean>();
  clear = output<boolean>();

  ngOnInit(): void {
    this.filterFormGroup = this.createFormGroup();    
  }

  createFormGroup(){
    let formGroup:any = {};
    for(let key in this.filtersMetaData())
    {
      let defaultValue = this.filtersMetaData()[key].defaultvalue;
      formGroup[key]=new FormControl(defaultValue);
    }
    return new FormGroup(formGroup);
  }

  getControls(){
    return (Object.keys(this.filterFormGroup.controls));
  }

  searchFilters(){
    console.log(this.filterFormGroup.value);
    this.search.emit(true);
  }

  clearFilters(){
    this.filterFormGroup.reset();
    this.clear.emit(true);
  }

}
