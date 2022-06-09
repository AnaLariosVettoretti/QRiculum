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

  username: string = '';
  contrasenia: string = '';

  user:any;

  btnAcceder = () => {

    this.miServicio
    .validate(this.username, this.contrasenia)
    .subscribe((data: any) => {
      
      this.user = data;
      
      if (this.user!=null) {

        sessionStorage.setItem('usuario', JSON.stringify(this.user));
        this.router.navigate(['/usuario']);

        this.miServicio.checkHeader();       
        
      }else{
        console.log('mal');
        
      }
      
    });

    /* sessionStorage.setItem('usuario', JSON.stringify(user));
    this.router.navigateByUrl('/usuario'); */
  };

  ngOnInit() {
    
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

}
