import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private miServicio: ServicioUsuariosService, private route: Router, private router: Router) { }
  registroForm: any = FormGroup;

  ngOnInit() {

    this.registroForm = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required]),
      contrasenia2: new FormControl('', [Validators.required]),
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
      sessionStorage.setItem('usuario', JSON.stringify(this.registroForm.value));

      this.miServicio.checkHeader(); 

      this.router.navigate(['/usuario']);

  }

  irLogin() {
    this.route.navigate(['/login']);
  }

 /*  getErrorMessage() {
    if (this.registroForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registroForm.hasError('email') ? 'Not a valid email' : '';
  } */
}
