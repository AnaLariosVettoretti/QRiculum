import { Component, Input, OnInit } from '@angular/core';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: string | undefined;
  @Input() nombre: string | undefined;
  @Input() apellido1: string | undefined;
  @Input() apellido2: string | undefined;
  @Input() email: string | undefined;

  constructor(private miServicio: ServicioUsuariosService) { }

  user : any;

  /* user = {
    usuario: 'JuanPerez95',
    nombre: 'Juan',
    apellido1: 'Pérez',
    apellido2: 'García',
    email: 'jupergar@gmail.com',
    contraseña: '123456',
    telefono1: '678453275',
    telefono2: '643652785',
    ciudad: 'Madrid'  
  } */

  ngOnInit() {

    const user = this.miServicio.obtenerDatos();

    this.user = user;
    
  }

  guardarCambios(){
    this.miServicio.muestraMensaje('Se han actualizado los datos correctamente')
    console.log(this.user);
  }

}
