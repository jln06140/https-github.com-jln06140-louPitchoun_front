import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModParentComponent } from './form-mod-parent.component';

describe('FormModParentComponent', () => {
  let component: FormModParentComponent;
  let fixture: ComponentFixture<FormModParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
