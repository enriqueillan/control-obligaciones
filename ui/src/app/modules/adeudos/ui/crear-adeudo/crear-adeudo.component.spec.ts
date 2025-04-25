import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdeudoComponent } from './crear-adeudo.component';

describe('CrearAdeudoComponent', () => {
  let component: CrearAdeudoComponent;
  let fixture: ComponentFixture<CrearAdeudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAdeudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
