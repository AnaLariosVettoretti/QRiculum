import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: string | undefined;
  @Input() nombre: string | undefined;
  @Input() apellido1: string | undefined;
  @Input() apellido2: string | undefined;
  constructor() { }

  ngOnInit() {
  }

}
