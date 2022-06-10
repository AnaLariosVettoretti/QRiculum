import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private router: Router) { }

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

  borrarCuenta() {

    Swal.fire({
      title: '¿Quieres eliminar tu cuenta? Esta acción es irreversible',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Cancelar',
      denyButtonText: `Eliminar mi cuenta`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log('cancelado');
        
      } else if (result.isDenied) {
        
        this.miServicio.delete(this.user.usuario).subscribe(data => {
   
          sessionStorage.clear();

          Swal.fire({
            title: 'Cuenta eliminada',
            icon: 'success'
          });

          this.router.navigate(['']);    
        })
      }
    })

    this.miServicio.checkHeader(); 
    
  }
}





