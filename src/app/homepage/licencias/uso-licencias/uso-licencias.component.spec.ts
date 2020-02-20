import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoLicenciasComponent } from './uso-licencias.component';

describe('UsoLicenciasComponent', () => {
  let component: UsoLicenciasComponent;
  let fixture: ComponentFixture<UsoLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
