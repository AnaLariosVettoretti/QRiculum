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
  datosCV: FormGroup;
  formData;
  

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    //Coge nombre de usuario de la URL para hacer la petición al servicio y obtener el CV
    const username = this.route.snapshot.queryParamMap.get('username');

    if (username) {
      const user = this.miServicio.obtenerCVUsuario(username);      
      this.user = user;
    }

    this.formData = getFormData(this.user.cv);

    console.log(this.user.cv)

    function getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
  }

    


    //Inicializa formulario
    this.initializeForm(this.formData);

  }

  guardarCambios() {
    /* console.log(this.user); */
  }

  initializeForm(formData): void {

    /* this.datosCV = this.fb.group({
      sobreMi: this.user.cv.sobreMi,
      formacion: this.fb.array([
        this.fb.control('')
      ])
    }) */

    let form ={};

    for (let i = 0; i < formData.length; i++) {
      
      form[formData[i].label] = new FormControl(formData.value);
      console.log(form);
      
    }

    this.datosCV = new FormGroup(form);
    
  }

  onSubmit(): void {
    console.log(this.datosCV);
  }

  getFormacion(): FormArray {
    return this.datosCV?.get('formacion') as FormArray;
  }

  nuevaFormacion(): void {
    this.formData.push({"sobreMi": ""});
  }
}
