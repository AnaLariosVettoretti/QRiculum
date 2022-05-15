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

  ngOnInit() {

    const user = this.miServicio.obtenerDatosUsuario();

    this.user = user;
    
  }

  guardarCambios(){
    console.log(this.user);
  }

}
