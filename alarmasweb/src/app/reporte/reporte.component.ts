import { Component } from '@angular/core';
import { Alarma } from '../alarma';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
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
