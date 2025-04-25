import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarActivosComponent } from './consultar-activos.component';

describe('ConsultarActivosComponent', () => {
  let component: ConsultarActivosComponent;
  let fixture: ComponentFixture<ConsultarActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarActivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
