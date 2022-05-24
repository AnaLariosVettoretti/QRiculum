import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: 'app-editarCV',
  templateUrl: './editarCV.component.html',
  styleUrls: ['./editarCV.component.css']
})
export class EditarCVComponent implements OnInit {

  user: any;
  datosCV: any;

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    //Coge nombre de usuario de la URL para hacer la petición al servicio y obtener el CV
    const username = this.route.snapshot.queryParamMap.get('username');

    if (username) {
      const user = this.miServicio.obtenerCVUsuario(username);
      this.user = user;
    }

    //Inicializa formulario
    this.initializeForm();

  }

  guardarCambios() {
    /* console.log(this.user); */
  }

  initializeForm(): void {

    this.datosCV = this.fb.group({
      sobreMi: this.user.cv.sobreMi,
      formacion: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  onSubmit(): void {
    console.log(this.datosCV);
  }

  getFormacion(): FormArray{
    return this.datosCV?.get('formacion') as FormArray;
  }
}
