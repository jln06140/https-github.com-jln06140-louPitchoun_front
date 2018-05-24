import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiesteComponent } from './sieste.component';

describe('SiesteComponent', () => {
  let component: SiesteComponent;
  let fixture: ComponentFixture<SiesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
