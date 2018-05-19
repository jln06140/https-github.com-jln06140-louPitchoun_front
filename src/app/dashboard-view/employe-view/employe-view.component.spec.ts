import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeViewComponent } from './employe-view.component';

describe('EmployeViewComponent', () => {
  let component: EmployeViewComponent;
  let fixture: ComponentFixture<EmployeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
