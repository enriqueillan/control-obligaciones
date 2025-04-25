import { Routes } from '@angular/router';
import { CrearAdeudoComponent } from './modules/adeudos/ui/crear-adeudo/crear-adeudo.component';
import { ConsultarActivosComponent } from './modules/contribuyentes/consultar-activos/consultar-activos.component';
import { CrearMultaNoFiscalComponent } from './modules/multas-no-fiscales/crear-multa-no-fiscal/crear-multa-no-fiscal.component';
// importa los demás...

export const routes: Routes = [
  { path: '', redirectTo: '/adeudos/crear', pathMatch: 'full' },
  { path: 'adeudos/crear', component: CrearAdeudoComponent },
  { path: 'contribuyentes/consultar-activos', component: ConsultarActivosComponent },
  { path: 'multas-no-fiscales/crear-multa-no-fiscal', component: CrearMultaNoFiscalComponent },
  // agrega rutas para todas las demás funcionalidades
];