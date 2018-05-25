import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupResumeComponent } from './popup-resume.component';

describe('PopupResumeComponent', () => {
  let component: PopupResumeComponent;
  let fixture: ComponentFixture<PopupResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
