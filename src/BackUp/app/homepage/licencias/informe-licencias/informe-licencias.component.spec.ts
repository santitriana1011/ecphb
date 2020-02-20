import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeLicenciasComponent } from './informe-licencias.component';

describe('InformeLicenciasComponent', () => {
  let component: InformeLicenciasComponent;
  let fixture: ComponentFixture<InformeLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
