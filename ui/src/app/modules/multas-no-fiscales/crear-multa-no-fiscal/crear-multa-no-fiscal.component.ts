// crear-multa-no-fiscal.component.ts
import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BusquedaAvanzadaComponent } from '../../contribuyentes/busqueda-avanzada/busqueda-avanzada.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'; 

@Component({
  selector: 'app-crear-multa-no-fiscal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BusquedaAvanzadaComponent,
  ],
  templateUrl: './crear-multa-no-fiscal.component.html',
  styleUrls: ['./crear-multa-no-fiscal.component.scss']
})
export class CrearMultaNoFiscalComponent {
  fb = inject(FormBuilder);
  dialog = inject(MatDialog);

  form = this.fb.group({
    numeroOficio: ['', Validators.required],
    fechaRecepcion: ['', Validators.required],
    entidadSolicitante: ['', Validators.required],
    concepto: ['', Validators.required],
    montoTotal: ['', [Validators.required, Validators.min(0)]],
    datosFiscales: [false],
    rfc: [''],
    codigoPostal: ['', Validators.required],
    estado: [{ value: '', disabled: true }],
    municipio: [{ value: '', disabled: true }],
    localidad: ['', Validators.required],
    colonia: ['', Validators.required],
    calle: ['', Validators.required],
    numeroExterior: ['', Validators.required],
    numeroInterior: ['']
  });

  contribuyenteEncontrado = signal<any | null>(null);
  errorBusqueda = signal(false);

  // Signals para control de estados
  rfcSignal = signal<string>('');
  estadoSignal = signal<string>('');  // Estado solo lectura
  municipioSignal = signal<string>(''); // Municipio solo lectura
  localidades = signal<string[]>(['Localidad 1', 'Localidad 2', 'Localidad 3']);
  colonias = signal<string[]>(['Colonia 1', 'Colonia 2', 'Colonia 3']);

  entidades = ['SAT', 'SHCP', 'PROFECO'];
  mockData = [
    { rfc: 'RFC123456789', nombre: 'Juan Pérez', tipo: 'Física' },
    { rfc: 'XYZ987654P2', nombre: 'Constructora XYZ', tipo: 'Moral' }
  ];

  buscarRFC() {
    const rfc = this.form.value.rfc?.trim().toUpperCase();
    const resultado = this.mockData.find(c => c.rfc === rfc);
    if (resultado) {
      this.contribuyenteEncontrado.set(resultado);
      this.errorBusqueda.set(false);
    } else {
      this.contribuyenteEncontrado.set(null);
      this.errorBusqueda.set(true);
    }
  }

  abrirBusquedaAvanzada() {
    const ref = this.dialog.open(BusquedaAvanzadaComponent);
    ref.afterClosed().subscribe((rfcSeleccionado: string) => {
      if (rfcSeleccionado) {
        this.form.patchValue({ rfc: rfcSeleccionado });
        this.buscarRFC();
      }
    });
  }

  mostrarCampoRFC = computed(() => this.form.get('datosFiscales')?.value === true);
}
