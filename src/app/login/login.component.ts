import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private toastr: ToastrService) { }

  username: string = '';
  contrasenia: string = '';

  usuarioForm: any;
  user: any;

  btnAcceder = () => {

    if (this.usuarioForm.valid) {

      this.miServicio
        .validate(this.usuarioForm.get('username').value, this.usuarioForm.get('contrasenia').value)
        .subscribe((data: any) => {

          this.user = data;

          if (this.user != null) {

            sessionStorage.setItem('usuario', JSON.stringify(this.user));
            this.router.navigate(['/usuario']);

            this.miServicio.checkHeader();

          } else {
            this.toastr.error('Credenciales incorrectas', 'Error al acceder', {
              timeOut: 3000
            });
          }

        });
    }else{
      this.toastr.error('Todos los campos deben estar completos')
    }
  };

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required,])
    });
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

}
