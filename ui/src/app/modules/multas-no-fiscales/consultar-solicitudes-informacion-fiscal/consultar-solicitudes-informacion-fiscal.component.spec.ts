import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSolicitudesInformacionFiscalComponent } from './consultar-solicitudes-informacion-fiscal.component';

describe('ConsultarSolicitudesInformacionFiscalComponent', () => {
  let component: ConsultarSolicitudesInformacionFiscalComponent;
  let fixture: ComponentFixture<ConsultarSolicitudesInformacionFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarSolicitudesInformacionFiscalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarSolicitudesInformacionFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
