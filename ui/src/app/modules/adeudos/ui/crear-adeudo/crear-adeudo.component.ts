import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-crear-credito-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './crear-adeudo.component.html',
  styleUrls: ['./crear-adeudo.component.scss']
})
export class CrearAdeudoComponent {
  creditoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.creditoForm = this.fb.group({
      nombreCliente: ['', [Validators.required]],
      monto: [null, [Validators.required, Validators.min(1)]],
      fechaSolicitud: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.creditoForm.valid) {
      console.log('Datos del Crédito:', this.creditoForm.value);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    }
  }
}