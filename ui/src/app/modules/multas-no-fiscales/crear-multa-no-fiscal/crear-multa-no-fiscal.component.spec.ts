import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMultaNoFiscalComponent } from './crear-multa-no-fiscal.component';

describe('CrearMultaNoFiscalComponent', () => {
  let component: CrearMultaNoFiscalComponent;
  let fixture: ComponentFixture<CrearMultaNoFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMultaNoFiscalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMultaNoFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
