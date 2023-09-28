import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleComponent } from "./detalle/detalle.component";
import { ListarComponent } from "./listar/listar.component";
import { LoginComponent } from "./login/login.component";
import { ReporteComponent } from "./reporte/reporte.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'alarmas', component: ListarComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: '*', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
