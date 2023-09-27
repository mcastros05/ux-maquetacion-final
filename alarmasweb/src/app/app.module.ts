import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { ListarModule } from './listar/listar.module';
import { DetalleComponent } from './detalle/detalle.component';
import { ReporteComponent } from './reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ListarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
