import { Component, OnInit } from '@angular/core';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-editarCV',
  templateUrl: './editarCV.component.html',
  styleUrls: ['./editarCV.component.css']
})
export class EditarCVComponent implements OnInit {

  constructor(private miServicio: ServicioUsuariosService) { }

  user: any;


  ngOnInit() {
    const user = this.miServicio.obtenerCVUsuario();

    this.user = user;
  }


}
