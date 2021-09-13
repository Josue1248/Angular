import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicoResultadoComponent } from './matematico-resultado.component';

describe('MatematicoResultadoComponent', () => {
  let component: MatematicoResultadoComponent;
  let fixture: ComponentFixture<MatematicoResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicoResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
