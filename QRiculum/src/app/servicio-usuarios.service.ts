import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor() { }

  muestraMensaje(mensaje: string) {

    alert(mensaje);

  }

  obtenerDatos(){

    const user = {
      usuario: 'JuanPerez95',
      nombre: 'Juan',
      apellido1: 'Pérez',
      apellido2: 'García',
      email: 'jupergar@gmail.com',
      contraseña: '123456',
      telefono1: '678453275',
      telefono2: '643652785',
      ciudad: 'Madrid'  
    }
    return user;
  }
}
