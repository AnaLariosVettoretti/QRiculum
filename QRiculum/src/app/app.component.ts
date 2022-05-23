import { Component } from '@angular/core';

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



