import { Component } from '@angular/core';
import { ServicioUsuariosService } from './servicio-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'QRiculum';
  usuario: any = '';

  showHeader = true;

  constructor(private miServicio: ServicioUsuariosService){}

  ngOnInit() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = sessionStorage.getItem('usuario');
    }

    this.miServicio.showHeader$?.subscribe(e => (this.showHeader = e));

  }

}



