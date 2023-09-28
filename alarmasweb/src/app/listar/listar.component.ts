import { Component, OnInit } from '@angular/core';
import { Alarma } from '../alarma';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  alarmas: Alarma[] = [
    { id: 1, title: "GYM Lunes", location: "../../assets/locations/location1.png", fecha: "18/09/23", hora: "06:00" },
    { id: 2, title: "Alarma LMV", location: "../../assets/locations/location2.png", fecha: "20/09/23", hora: "05:00" },
    { id: 3, title: "GYM Martes", location: "../../assets/locations/location3.png", fecha: "21/09/23", hora: "05:00" },
    { id: 4, title: "Cita Médica", location: "../../assets/locations/location4.png", fecha: "30/09/23", hora: "15:00" },
    { id: 5, title: "Alarma VSD", location: "../../assets/locations/location1.png", fecha: "25/09/23", hora: "06:30" },
    { id: 6, title: "Entrega UX", location: "../../assets/locations/location2.png", fecha: "17/09/23", hora: "23:59" },
    { id: 7, title: "Recordatorio", location: "../../assets/locations/location3.png", fecha: "01/01/24", hora: "05:25" },
    { id: 8, title: "Navidad", location: "../../assets/locations/location4.png", fecha: "25/12/23", hora: "01:00" },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBtnClick() {
    this.router.navigateByUrl("/detalle");
  }

}
