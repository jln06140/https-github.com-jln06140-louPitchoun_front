import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEnfantComponent } from './modifier-enfant.component';

describe('ModifierEnfantComponent', () => {
  let component: ModifierEnfantComponent;
  let fixture: ComponentFixture<ModifierEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
