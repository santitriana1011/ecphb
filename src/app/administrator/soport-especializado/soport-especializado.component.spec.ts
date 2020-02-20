import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoportEspecializadoComponent } from './soport-especializado.component';

describe('SoportEspecializadoComponent', () => {
  let component: SoportEspecializadoComponent;
  let fixture: ComponentFixture<SoportEspecializadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoportEspecializadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoportEspecializadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
