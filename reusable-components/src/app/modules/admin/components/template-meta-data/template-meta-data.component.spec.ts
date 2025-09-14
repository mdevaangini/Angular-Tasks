import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMetaDataComponent } from './template-meta-data.component';

describe('TemplateMetaDataComponent', () => {
  let component: TemplateMetaDataComponent;
  let fixture: ComponentFixture<TemplateMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateMetaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
