export class Alarma {
  id: number;
  title: string;
  location: string;
  fecha: string;
  hora: string;

  constructor(
    id: number,
    title: string,
    location: string,
    fecha: string,
    hora: string
  ) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.fecha = fecha;
    this.hora = hora;
  }
}
