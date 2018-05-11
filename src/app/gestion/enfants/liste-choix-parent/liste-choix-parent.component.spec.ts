import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChoixParentComponent } from './liste-choix-parent.component';

describe('ListeChoixParentComponent', () => {
  let component: ListeChoixParentComponent;
  let fixture: ComponentFixture<ListeChoixParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeChoixParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeChoixParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
