import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarLicenciasComponent } from './verificar-licencias.component';

describe('VerificarLicenciasComponent', () => {
  let component: VerificarLicenciasComponent;
  let fixture: ComponentFixture<VerificarLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
