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

  user: any;

  ngOnInit() {

    const username = this.route.snapshot.queryParamMap.get('username');

    if (username) {
      this.miServicio
        .getOne(username)
        .subscribe((data: any) => {
          this.user = data;
          console.log(this.user.cv);
          
        });
        
    }
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
