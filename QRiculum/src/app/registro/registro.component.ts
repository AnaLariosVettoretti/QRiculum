import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private miServicio: ServicioUsuariosService) { }
  registroForm: any = FormGroup;

  ngOnInit() {

    this.registroForm = this.fb.group({
      usuario: new FormControl(),
      email: new FormControl(),
      contrasenia: new FormControl(),
      contrasenia2: new FormControl(),
    });

  }

  onSubmit() {
    console.log(this.registroForm.value);

    this.miServicio
        .create(this.registroForm.value)
        .subscribe(() => {
          console.log('registrado');                 
        });
  }

}
