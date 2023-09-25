import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarComponent],
  exports: [ListarComponent]
})
export class ListarModule { }
