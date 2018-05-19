import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAssociateEnfantComponent } from './popup-associate-enfant.component';

describe('PopupAssociateEnfantComponent', () => {
  let component: PopupAssociateEnfantComponent;
  let fixture: ComponentFixture<PopupAssociateEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAssociateEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAssociateEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
