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

  ngOnInit() {
    if (sessionStorage.getItem('usuario')) {
      this.usuario = sessionStorage.getItem('usuario');
    }

  }

}



