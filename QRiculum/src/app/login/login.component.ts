import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  username: string = 'sdf';
  contrasenia: string = 'fsdfsd';

  btnAcceder = () => {

    const user = this.miServicio.login(this.username, this.contrasenia);

    this.router.navigateByUrl('/usuario');
  };

  ngOnInit() {
  }

}
