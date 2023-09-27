import { Component } from '@angular/core';
import { Alarma } from '../alarma';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  alarma: Alarma = { 
    id: 1, 
    title: "GYM Lunes", 
    location: "../../assets/map_detalle.png", 
    fecha: "18/09/23", 
    hora: "06:00" 
  }

  constructor() { }

  ngOnInit() {
  }
}
