import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusquedaAvanzadaComponent } from '../busqueda-avanzada/busqueda-avanzada.component'; // Importa el diálogo
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa FormBuilder y FormGroup
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

interface Contribuyente {
  rfc: string;
  nombre: string;
  tipo: string;
}

interface Activo {
  numero: number;
  tipoBien: string;
  descripcion: string;
  importe: number;
}

@Component({
  selector: 'app-consultar-activos',
  templateUrl: './consultar-activos.component.html',
  styleUrls: ['./consultar-activos.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule
    MatIcon,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class ConsultarActivosComponent {
  // Propiedades del componente
  formulario: FormGroup; // Declara el formulario
  contribuyenteEncontrado = signal(false); // Indica si se encontró un contribuyente
  mostrarError = signal(false); // Indica si hay un error
  contribuyente = signal<Contribuyente>({ rfc: '', nombre: '', tipo: '' }); // Datos del contribuyente
  activos = signal<Activo[]>([]); // Activos del contribuyente
  columnas: string[] = ['numero', 'tipoBien', 'descripcion', 'importe']; // Columnas de la tabla

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    // Inicializa el formulario
    this.formulario = this.fb.group({
      rfc: ['', [Validators.required, Validators.minLength(10)]] // Campo RFC con validaciones
    });
  }

  // Método para buscar un contribuyente por RFC
  buscarContribuyente() {
    if (this.formulario.invalid) {
      return; // No continuar si el formulario es inválido
    }

    const rfc = this.formulario.value.rfc;

    // Simulación de datos (puedes reemplazar esto con una llamada HTTP)
    const contribuyentesMock: Contribuyente[] = [
      { nombre: 'Juan Pérez', tipo: 'Persona Física', rfc: 'RFC123456789' },
      { nombre: 'María López', tipo: 'Persona Física', rfc: 'RFC987654321' },
      { nombre: 'Empresa S.A.', tipo: 'Persona Moral', rfc: 'RFCABCDEF123' }
    ];

    
    const activosMock: Record<string, Activo[]> = {
      'RFC123456789': [
        { numero: 1, tipoBien: 'Inmueble', descripcion: 'Casa habitación', importe: 500000 },
        { numero: 2, tipoBien: 'Vehículo', descripcion: 'Automóvil sedán', importe: 200000 }
      ],
      'RFC987654321': [
        { numero: 3, tipoBien: 'Inmueble', descripcion: 'Departamento', importe: 800000 },
        { numero: 4, tipoBien: 'Vehículo', descripcion: 'Motocicleta', importe: 50000 }
      ],
      'RFCABCDEF123': [
        { numero: 5, tipoBien: 'Inmueble', descripcion: 'Oficina', importe: 1000000 },
        { numero: 6, tipoBien: 'Vehículo', descripcion: 'Camioneta', importe: 300000 }
      ]
    };

    // Simulación de búsqueda
    const contribuyente = contribuyentesMock.find(c => c.rfc === rfc);

    if (contribuyente) {
      this.contribuyenteEncontrado.set(true);
      this.mostrarError.set(false);
      this.contribuyente.set(contribuyente);
      this.activos.set(activosMock[rfc] || []);  // Asigna los activos correspondientes
    } else {
      this.contribuyenteEncontrado.set(false);
      this.mostrarError.set(true);
    }
  }

  // Método para abrir el diálogo de búsqueda avanzada
  abrirBusquedaAvanzada() {
    const dialogRef = this.dialog.open(BusquedaAvanzadaComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((rfc: string | undefined) => {
      if (rfc) {
        this.formulario.patchValue({ rfc }); // Actualiza el valor del formulario con el RFC seleccionado
        this.buscarContribuyente(); // Busca el contribuyente automáticamente
      }
    });
  }
}