import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantJourneeComponent } from './enfant-journee.component';

describe('EnfantJourneeComponent', () => {
  let component: EnfantJourneeComponent;
  let fixture: ComponentFixture<EnfantJourneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantJourneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
