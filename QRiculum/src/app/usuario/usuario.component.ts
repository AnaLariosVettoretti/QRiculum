import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  user: any;

  ngOnInit() {

    //Obtiene de sesión el usuario
    var usuario = sessionStorage.getItem('usuario');



    if (usuario) {
      this.user = JSON.parse(usuario);
      console.log(JSON.parse(usuario));
    }

  }

  guardarCambios() {
    console.log(this.user);


    this.miServicio.update(this.user.usuario, this.user).subscribe(data => {
      
      sessionStorage.setItem('usuario', JSON.stringify(data));
     
      Swal.fire({
        title: 'Datos actualizados',
        icon: 'success',
        confirmButtonText: 'Vale'
      })
      
    })
  }
}





