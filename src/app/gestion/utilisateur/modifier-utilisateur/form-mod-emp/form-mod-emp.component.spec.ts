import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModEmpComponent } from './form-mod-emp.component';

describe('FormModEmpComponent', () => {
  let component: FormModEmpComponent;
  let fixture: ComponentFixture<FormModEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
