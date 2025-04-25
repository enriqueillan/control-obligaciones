import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

interface Contribuyente {
  nombre: string;
  rfc: string;
  tipo: string;
}

@Component({
  selector: 'app-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class BusquedaAvanzadaComponent {
  formulario: FormGroup;
  resultados: Contribuyente[] = [];
  columnas: string[] = ['nombre', 'rfc', 'tipo'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BusquedaAvanzadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.fb.group({
      nombre: [''],
      rfc: ['']
    });
  }

  buscarContribuyentes() {
    const nombre = this.formulario.value.nombre?.trim();
    const rfc = this.formulario.value.rfc?.trim();

    // Simulación de datos (puedes reemplazar esto con una llamada HTTP)
    const contribuyentesMock: Contribuyente[] = [
      { nombre: 'Juan Pérez', rfc: 'RFC123456789', tipo: 'Persona Física' },
      { nombre: 'María López', rfc: 'RFC987654321', tipo: 'Persona Física' },
      { nombre: 'Empresa S.A.', rfc: 'RFCABCDEF123', tipo: 'Persona Moral' }
    ];

    let resultadosFiltrados = contribuyentesMock;

    if (nombre) {
      resultadosFiltrados = resultadosFiltrados.filter(c =>
        c.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
    }

    if (rfc) {
      resultadosFiltrados = resultadosFiltrados.filter(c =>
        c.rfc.toLowerCase().includes(rfc.toLowerCase())
      );
    }

    this.resultados = resultadosFiltrados;
  }

  seleccionarContribuyente(contribuyente: Contribuyente) {
    this.dialogRef.close(contribuyente.rfc); // Cierra el diálogo y devuelve el RFC
  }
}