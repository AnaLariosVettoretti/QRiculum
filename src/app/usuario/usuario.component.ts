import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any;

  usuarioForm: any;

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  user: any;

  ngOnInit() {

    //Obtiene de sesión el usuario
    var usuario = sessionStorage.getItem('usuario');



    if (usuario) {
      this.user = JSON.parse(usuario);
      console.log(JSON.parse(usuario));
    }

    this.usuarioForm = this.fb.group({
      usuario: this.user.usuario,
      contrasenia: this.user.contrasenia,
      nombre: new FormControl(this.user.nombre, [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      apellido1: new FormControl(this.user.apellido1, [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      apellido2: new FormControl(this.user.apellido2, [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      email: new FormControl(this.user.email, [Validators.required]),
      telefono1: new FormControl(this.user.telefono1, [Validators.required, Validators.pattern('[0-9]{9}$')]),
      telefono2: new FormControl(this.user.telefono2, [Validators.required, Validators.pattern('[0-9]{9}$')]),
      ciudad: new FormControl(this.user.ciudad, [Validators.required]),
      cv: this.user.cv
    });

  }

  guardarCambios() {

    if (this.usuarioForm.valid) {
      console.log(this.usuarioForm.value);

      this.miServicio.update(this.user.usuario, this.usuarioForm.value).subscribe(data => {

        sessionStorage.setItem('usuario', JSON.stringify(data));

        Swal.fire({
          title: 'Datos actualizados',
          icon: 'success',
          confirmButtonText: 'Vale'
        })

      })
    }else{
      this.toastr.error('Todos los campos deben estar completos y ser correctos')
    }


  }

  borrarCuenta() {

    Swal.fire({
      title: '¿Quieres eliminar tu cuenta? Esta acción es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar mi cuenta',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.miServicio.delete(this.user.usuario).subscribe(data => {

          sessionStorage.clear();
          this.miServicio.checkHeader();

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

  public hasError = (controlName: string, errorName: string) => {
    return this.usuarioForm.controls[controlName].hasError(errorName);
  }
}





