import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupActiviteComponent } from './popup-activite.component';

describe('PopupActiviteComponent', () => {
  let component: PopupActiviteComponent;
  let fixture: ComponentFixture<PopupActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
