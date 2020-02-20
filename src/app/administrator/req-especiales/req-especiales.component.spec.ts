import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqEspecialesComponent } from './req-especiales.component';

describe('ReqEspecialesComponent', () => {
  let component: ReqEspecialesComponent;
  let fixture: ComponentFixture<ReqEspecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqEspecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
