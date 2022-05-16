import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute) { }

  user:any;
  

  ngOnInit() {

    const username = this.route.snapshot.queryParamMap.get('username');
    console.log(this.user);

    if (username) {
      const user = this.miServicio.obtenerCVUsuario(username);
      this.user = user;
    }
  }

}
