import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActiviteComponent } from './dialog-activite.component';

describe('DialogActiviteComponent', () => {
  let component: DialogActiviteComponent;
  let fixture: ComponentFixture<DialogActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
