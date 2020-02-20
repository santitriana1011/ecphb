import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManEvolutivosComponent } from './man-evolutivos.component';

describe('ManEvolutivosComponent', () => {
  let component: ManEvolutivosComponent;
  let fixture: ComponentFixture<ManEvolutivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManEvolutivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManEvolutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
