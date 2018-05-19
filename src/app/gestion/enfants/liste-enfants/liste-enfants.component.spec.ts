import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnfantsComponent } from './liste-enfants.component';

describe('ListeEnfantsComponent', () => {
  let component: ListeEnfantsComponent;
  let fixture: ComponentFixture<ListeEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
