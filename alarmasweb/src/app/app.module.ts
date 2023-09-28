import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DetalleComponent } from "./detalle/detalle.component";
import { ListarComponent } from "./listar/listar.component";
import { LoginComponent } from "./login/login.component";
import { ReporteComponent } from "./reporte/reporte.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ListarComponent,
    LoginComponent,
    ReporteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
