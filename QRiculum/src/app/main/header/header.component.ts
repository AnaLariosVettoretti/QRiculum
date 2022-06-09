import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuariosService } from 'src/app/servicio-usuarios.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nombreUsuario: string | undefined;

  constructor(private router: Router, private miServicio: ServicioUsuariosService) { }

  usuario: any;
  showHeader: boolean;

  btnSalir = () => {
    this.router.navigateByUrl('');
    sessionStorage.clear();
    this.miServicio.checkHeader(); 
  };


  ngOnInit() {

    const user = sessionStorage.getItem('usuario');

    if (user) {
      this.usuario = JSON.parse(user);
    }

    this.miServicio.showHeader$?.subscribe(e => (this.showHeader = e));

  }

}
