import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuariosService } from 'src/app/servicio-usuarios.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  @Input() nombreUsuario: string | undefined;

  constructor(private router: Router, private miServicio: ServicioUsuariosService) { }
  ngDoCheck(): void {
    
    var user = sessionStorage.getItem('usuario');

    if (user) {
      console.log('user '+ user);
      
      this.usuario = JSON.parse(user)
    }

    this.miServicio.showHeader$?.subscribe(e => {
      (this.showHeader = e)
    });
  }

  usuario: any;
  showHeader: boolean;

  btnSalir = () => {
    this.router.navigateByUrl('');
    sessionStorage.clear();
    this.miServicio.checkHeader(); 
  };


  ngOnInit() {

  }

}
