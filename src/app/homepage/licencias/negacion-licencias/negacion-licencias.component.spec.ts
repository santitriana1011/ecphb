import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegacionLicenciasComponent } from './negacion-licencias.component';

describe('NegacionLicenciasComponent', () => {
  let component: NegacionLicenciasComponent;
  let fixture: ComponentFixture<NegacionLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegacionLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegacionLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
