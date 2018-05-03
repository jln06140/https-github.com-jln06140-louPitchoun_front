import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDashComponent } from './section-dash.component';

describe('SectionDashComponent', () => {
  let component: SectionDashComponent;
  let fixture: ComponentFixture<SectionDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
