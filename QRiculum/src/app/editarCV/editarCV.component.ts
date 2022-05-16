import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-editarCV',
  templateUrl: './editarCV.component.html',
  styleUrls: ['./editarCV.component.css']
})
export class EditarCVComponent implements OnInit {

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  user: any;


  ngOnInit() {

    const username = this.route.snapshot.queryParamMap.get('username');
    console.log(username);

    if (username) {
      const user = this.miServicio.obtenerCVUsuario(username);
      this.user = user;
    }

  }

  guardarCambios() {
    console.log(this.user);
  }

}
