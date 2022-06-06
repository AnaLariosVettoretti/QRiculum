import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: string;
  @Input() nombre: string;
  @Input() apellido1: string;
  @Input() apellido2: string;
  @Input() email: string;

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  user: any;

  ngOnInit() {
  
    //Obtiene de sesión el usuario
    const usuario = sessionStorage.getItem('usuario');

    
    
    if (usuario) {
      this.user = JSON.parse(usuario);
      console.log(JSON.parse(usuario));
    }
   
  }

  guardarCambios() {
    /* console.log(this.user); */
  }

}
