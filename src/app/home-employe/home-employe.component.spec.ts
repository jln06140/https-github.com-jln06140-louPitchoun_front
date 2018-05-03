import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmployeComponent } from './home-employe.component';

describe('HomeEmployeComponent', () => {
  let component: HomeEmployeComponent;
  let fixture: ComponentFixture<HomeEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
