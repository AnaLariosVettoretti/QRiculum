import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() nombreUsuario: string | undefined;

  constructor(private router: Router) { }

  btnLogin = () => {
    this.router.navigateByUrl('/login');
  };

  btnRegistro = () => {
    this.router.navigateByUrl('/registro');
  };

  ngOnInit() {
  }

}
