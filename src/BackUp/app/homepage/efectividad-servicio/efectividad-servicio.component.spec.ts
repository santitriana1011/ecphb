import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectividadServicioComponent } from './efectividad-servicio.component';

describe('EfectividadServicioComponent', () => {
  let component: EfectividadServicioComponent;
  let fixture: ComponentFixture<EfectividadServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectividadServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectividadServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
