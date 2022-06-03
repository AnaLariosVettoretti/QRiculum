import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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

        Swal.fire({
          title: 'Registrado con éxito',
          icon: 'success',
          confirmButtonText: '¡Genial!'
        })

      });

  }

}
