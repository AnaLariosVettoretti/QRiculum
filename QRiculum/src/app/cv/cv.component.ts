import { Component, OnInit } from '@angular/core';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private miServicio: ServicioUsuariosService) { }

  user:any;

  ngOnInit() {

    const user = this.miServicio.obtenerCVUsuario();

    this.user = user;
    
  }

}
