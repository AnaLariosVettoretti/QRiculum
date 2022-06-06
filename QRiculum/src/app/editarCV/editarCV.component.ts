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
  formacionForm: any = FormGroup;
  //datosCV: FormGroup;
  //formData;
  listaOf:any = []
  institucion:string = ''
  denominación:string = ''
  descripcion:string = ''
  nota:string = ''
  fIni:string  = ''
  fFin:string = ''


  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    //Coge nombre de usuario de la URL para hacer la petición al servicio y obtener el CV
    const username = this.route.snapshot.queryParamMap.get('username');


    if (username) {
      const user = this.miServicio.obtenerCVUsuario(username);      
      this.user = user;

      console.log('ff=', this.user.cv.educacion )
    }



    this.formacionForm = this.fb.group({
      formacion: this.fb.array([])
    });

    for   (let i of  this.user.cv.educacion ){
     
      this.denominación = i.denominacion
      this.institucion = i.institucion
      this.descripcion = i.descripcion
      this.fIni = i.fIni
      this.fFin = i.fFin
      this.nota = i.nota

      this.newFakeData(this.denominación, this.institucion, this.descripcion, this.fIni, this.fFin, this.nota);
      this.addFakeFormacion()

      console.log('denominacion', this.denominación)
      console.log('institucion', this.institucion)
      console.log('nota', this.nota)
      console.log('fIni', this.fIni)
      console.log('fFin', this.fFin)
    }

    console.log('formacion', this.formacionForm.value)


    //   this.formData = getFormData(this.user.cv);

    //   console.log(this.user.cv)

    //   function getFormData(object) {
    //     const formData = new FormData();
    //     Object.keys(object).forEach(key => formData.append(key, object[key]));
    //     return formData;
    // }




    //Inicializa formulario
    //this.initializeForm(this.formData);

  }

  newFakeData(denominación, institucion, descripcion, fIni, fFin, nota): FormGroup {
    return this.fb.group({
      institucion: denominación,
      denominacion: institucion,
      descripcion: descripcion,
      nota: nota,
      fIni:  fIni,
      fFin:  fFin
     
    });
  }

  guardarCambios() {
    /* console.log(this.user); */
  }

  // initializeForm(formData): void {

  //   /* this.datosCV = this.fb.group({
  //     sobreMi: this.user.cv.sobreMi,
  //     formacion: this.fb.array([
  //       this.fb.control('')
  //     ])
  //   }) */

  //   let form ={};

  //   for (let i = 0; i < formData.length; i++) {
  //     
  //     form[formData[i].label] = new FormControl(formData.value);
  //     console.log(form);
  //     
  //   }

  //   this.datosCV = new FormGroup(form);
  //   
  // }

  // onSubmit(): void {
  //   console.log(this.datosCV);
  // }

  // getFormacion(): FormArray {
  //   return this.datosCV?.get('formacion') as FormArray;
  // }

  // nuevaFormacion(): void {
  //   this.formData.push({"sobreMi": ""});
  // }

  //REDES SOCIALES

  redes(): FormArray {
    return this.formacionForm.get('redes') as FormArray;
  }

  newRedes(): FormGroup {
    return this.fb.group({
      red: '',
      usuario: ''
    });
  }

  addRedes() {
    this.redes().push(this.newRedes());
  }

  removeRedes(empIndex: number) {
    this.redes().removeAt(empIndex);
  }

  //EXPERIENCIA LABORAL

  expLaboral(): FormArray {
    return this.formacionForm.get('expLaboral') as FormArray;
  }

  newExpLaboral(): FormGroup {
    return this.fb.group({
      empresa: '',
      cargo: '',
      descripcion: '',
      fIni: null,
      fFin: null
    });
  }

  addExpLaboral() {
    this.expLaboral().push(this.newExpLaboral());
  }

  removeExpLaboral(empIndex: number) {
    this.expLaboral().removeAt(empIndex);
  }

  //FORMACIÓN

  formacion(): FormArray {
    return this.formacionForm.get('formacion') as FormArray;
  }

  newFormacion(): FormGroup {
    return this.fb.group({
      institucion: '',
      denominacion: '',
      descripcion: '',
      nota: null,
      fIni: null,
      fFin: null
    });
  }

  addFormacion() {
    this.formacion().push(this.newFormacion());
  }

  addFakeFormacion() {
    this.formacion().push(this.newFakeData(this.denominación, this.institucion, this.descripcion, this.fIni, this.fFin, this.nota));
  }

  removeFormacion(empIndex: number) {
    this.formacion().removeAt(empIndex);
  }


  onSubmit() {
    console.log(this.formacionForm.value);
  }


  //IDIOMAS

  idiomas(): FormArray {
    return this.formacionForm.get('idiomas') as FormArray;
  }

  newIdiomas(): FormGroup {
    return this.fb.group({
      idioma: '',
      nivel: '',
    });
  }

  addIdiomas() {
    this.idiomas().push(this.newIdiomas());
  }

  removeIdiomas(empIndex: number) {
    this.idiomas().removeAt(empIndex);
  }

  //CERTIFICADOS

  certificados(): FormArray {
    return this.formacionForm.get('certificados') as FormArray;
  }

  newCertificados(): FormGroup {
    return this.fb.group({
      certificado: '',
      expedicion: '',
      fecha: ''
    });
  }

  addCertificados() {
    this.certificados().push(this.newCertificados());
  }

  removeCertificados(empIndex: number) {
    this.certificados().removeAt(empIndex);
  }


}
