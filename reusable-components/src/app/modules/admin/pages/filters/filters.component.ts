import { Component, inject, viewChild } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FiltersComponent } from '../../../../shared/filters/filters.component';
import { MockApiService } from '../../../../core/services/mock-api.service';
import { FiltersMetaData } from '../../../../shared/model/filters.interface';

@Component({
  selector: 'app-filters',
  imports: [FiltersComponent,ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersPage {
  form = viewChild(FiltersComponent)
  
  ngAfterViewInit(): void {
    this.setValidators();
  }

  setValidators(){
    for(let key in this.form()?.filterFormGroup.controls){
      const control = this.form()?.filterFormGroup.get(key);
        if(key == 'name')
        {
          control?.setValidators([Validators.minLength(5)])
        }
        else{
           control?.setValidators(Validators.required)
        }
      control?.updateValueAndValidity();
    }
  }

  filtersMetaData:FiltersMetaData = {
    name:{ type: 'text', placeholder: 'Name',optional:false,defaultvalue:'Devaangini'},
    age:{ type: 'number', placeholder : 'Age',optional:false,defaultvalue:''},
    gender:{ type: 'text', placeholder : 'Gender',optional:false,defaultvalue:''},
    date:{ type: 'date', placeholder : 'Date',optional:true,defaultvalue:''},
  }

  searchFilters(event:boolean){
    console.log("search event from filters component",event);
  }

  clearFilters(event:boolean){
    console.log("clear event from filters component",event);
  }
}


















  // this.form()?.filterFormGroup[key].setValidators(Validators.required)
  // This only works if filterFormGroup is a plain JavaScript object, not a FormGroup.


    // this.form()?.filterFormGroup.get(key)?.setValidators(Validators.required)
  //This is the correct way to access any control inside a FormGroup or nested structure.