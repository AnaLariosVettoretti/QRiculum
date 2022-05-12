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
  @Input() email: string | undefined;
  constructor() { }

  user = {
    usuario: 'JuanPerez95',
    nombre: 'Juan',
    apellido1: 'Pérez',
    apellido2: 'García',
    email: 'jupergar@gmail.com',
    contraseña: '123456',
    telefono1: '678453275',
    telefono2: '643652785',
    ciudad: 'Madrid'  
  }

  ngOnInit() {
  }

}
