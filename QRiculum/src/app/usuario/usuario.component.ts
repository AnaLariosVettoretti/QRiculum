import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  user: any;

  ngOnInit() {

    const username = this.route.snapshot.queryParamMap.get('username');
    console.log(this.user);

    if (username) {
      const user = this.miServicio.obtenerDatosUsuario(username);
      this.user = user;
    }



  }

  guardarCambios() {
    console.log(this.user);
  }

}
