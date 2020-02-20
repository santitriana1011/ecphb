import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoFeatureLicenciasComponent } from './uso-feature-licencias.component';

describe('UsoFeatureLicenciasComponent', () => {
  let component: UsoFeatureLicenciasComponent;
  let fixture: ComponentFixture<UsoFeatureLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoFeatureLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoFeatureLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
