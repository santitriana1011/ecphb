import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlLicenciasComponent } from './control-licencias.component';

describe('ControlLicenciasComponent', () => {
  let component: ControlLicenciasComponent;
  let fixture: ComponentFixture<ControlLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
