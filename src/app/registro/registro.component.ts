import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private miServicio: ServicioUsuariosService, private route: Router, private router: Router, private toastr: ToastrService) { }
  registroForm: any;
  checkUsuario: boolean = false;

  ngOnInit() {

    this.registroForm = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      contrasenia2: new FormControl('', [Validators.required, passwordMatchValidator]),
    },
    );
  }

  onSubmit() {
    
      if (this.checkUsuario) {
  
        console.log(this.registroForm.valid);
        
        if (this.registroForm.valid) {
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

          this.toastr.info('Completa tus datos en datos de usuario');
          this.toastr.info('Completa tu cv');
        }else{
          
          this.toastr.error('Todos los campos deben estar completos y ser válidos');
        }
      }else{
        this.toastr.error('Este nombre de usuario no está disponible')
      }
    

   
  }

  irLogin() {
    this.route.navigate(['/login']);
  }

  checkUsername(event: Event) {

    const username = (<HTMLInputElement>event.target).value;

    if (username != '') {
      this.miServicio
        .getOne(username)
        .subscribe((data: any) => {
          const usuario = data;

          if (usuario == null) {
            this.toastr.success('Usuario disponible');
            this.checkUsuario = true;

          } else {
            this.toastr.error('Este nombre de usuario no está disponible');
            this.checkUsuario = false;
          }
        });
    }

  }


  matchPassword2(firstControl, secondControl): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const password = control.get(firstControl).value;
      const confirm = control.get(secondControl).value;

      if (password != confirm) { return { 'noMatch': true } }

      return null

    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registroForm.controls[controlName].hasError(errorName);
  }
}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  const parent = formGroup.parent as FormGroup;
  if (!parent) return null;
  return parent.get('contrasenia').value === parent.get('contrasenia2').value ?
    null : { 'mismatch': true };
}
