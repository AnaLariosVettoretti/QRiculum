import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editarCV',
  templateUrl: './editarCV.component.html',
  styleUrls: ['./editarCV.component.css']
})
export class EditarCVComponent implements OnInit {

  username: string;

  user: any;
  formacionForm: any = FormGroup;

  listaOf: any = []
  sobreMi: string;

  institucion: string = '';
  denominación: string = '';
  descripcion: string = '';
  nota: string = '';
  fIni: string = '';
  fFin: string = '';

  empresa: string;
  cargo: string;
  descripcionE: string;
  fIniE: string;
  fFinE: string;

  idioma: string;
  nivel: string;

  red: string;
  usuario: string;

  certificado: string;
  expedicion: string;
  fecha: string;

  conocimiento: string;

  constructor(private miServicio: ServicioUsuariosService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {

    //Obtiene de sesión el usuario
    var usuario = sessionStorage.getItem('usuario');

    if (usuario) {
      //Coge nombre de usuario de la URL para hacer la petición al servicio y obtener el CV
      const username = this.route.snapshot.queryParamMap.get('username');
      this.username = username;

      if (username) {

        this.miServicio
          .getOne(username)
          .subscribe((data: any) => {
            this.user = data;
            console.log('ff=', this.user.cv);

            if (this.user.cv != undefined) {

              this.sobreMi = this.user.cv.sobreMi;
              this.formacionForm.controls.sobreMi.setValue(this.sobreMi);


              if (this.user.cv.educacion != null) {
                for (let i of this.user.cv.educacion) {

                  this.denominación = i.denominacion
                  this.institucion = i.institucion
                  this.descripcion = i.descripcion
                  this.fIni = i.fIni
                  this.fFin = i.fFin
                  this.nota = i.nota

                  this.datosFormacion(this.denominación, this.institucion, this.descripcion, this.fIni, this.fFin, this.nota);
                  this.addDatosFormacion()

                }
              }




              for (let i of this.user.cv.expLaboral) {

                this.empresa = i.empresa
                this.cargo = i.cargo
                this.descripcionE = i.descripcion
                this.fIniE = i.fIni
                this.fFinE = i.fFin

                this.datosExp(this.empresa, this.cargo, this.descripcionE, this.fIniE, this.fFinE);
                this.addExp()
              }

              for (let i of this.user.cv.idiomas) {

                this.idioma = i.idioma
                this.nivel = i.nivel

                this.datosIdiomas(this.idioma, this.nivel);
                this.addIdioma()
              }

              for (let i of this.user.cv.redes) {

                this.red = i.red
                this.usuario = i.usuario

                this.datosRedes(this.red, this.usuario);
                this.addRed()
              }

              for (let i of this.user.cv.certificados) {

                this.certificado = i.certificado;
                this.expedicion = i.expedicion;
                this.fecha = i.fecha;

                this.datosCertificados(this.certificado, this.expedicion, this.fecha);
                this.addCertificado();
              }

              for (let i of this.user.cv.conocimientos) {

                this.conocimiento = i;

                this.datosConocimientos(this.conocimiento);
                this.addConocimientos();

              }

            }
          });
      }


      this.formacionForm = this.fb.group({
        sobreMi: new FormControl(this.sobreMi),
        redes: this.fb.array([]),
        educacion: this.fb.array([]),
        expLaboral: this.fb.array([]),
        idiomas: this.fb.array([]),
        certificados: this.fb.array([]),
        conocimientos: this.fb.array([])
      });
    } else {
      console.log('no hay');

      this.router.navigate(['/login']);
    }


  }


  datosFormacion(denominación, institucion, descripcion, fIni, fFin, nota): FormGroup {
    return this.fb.group({
      institucion: new FormControl(institucion, [Validators.required]),
      denominacion: new FormControl(denominación, [Validators.required]),
      descripcion: new FormControl(descripcion, [Validators.required]),
      nota: new FormControl(nota),
      fIni: new FormControl(fIni, [Validators.required]),
      fFin: new FormControl(fFin)
    });
  }

  datosExp(empresa, cargo, descripcion, fIni, fFin): FormGroup {
    return this.fb.group({
      empresa: new FormControl(empresa, [Validators.required]),
      cargo: new FormControl(cargo, [Validators.required]),
      descripcion: new FormControl(descripcion, [Validators.required]),
      fIni: new FormControl(fIni, [Validators.required]),
      fFin: new FormControl(fFin)
    });
  }

  datosIdiomas(idioma, nivel): FormGroup {
    return this.fb.group({
      idioma: new FormControl(idioma, [Validators.required]),
      nivel: new FormControl(nivel, [Validators.required]),
    });
  }

  datosRedes(red, usuario): FormGroup {
    return this.fb.group({
      red: new FormControl(red, [Validators.required]),
      usuario: new FormControl(usuario, [Validators.required])
    });
  }

  datosCertificados(certificado, expedicion, fecha): FormGroup {
    return this.fb.group({
      certificado: new FormControl(certificado, [Validators.required]),
      expedicion: new FormControl(expedicion, [Validators.required]),
      fecha: new FormControl(fecha)
    });
  }

  datosConocimientos(conocimiento): FormControl {

    return new FormControl(conocimiento, [Validators.required]);
  }


  //REDES SOCIALES

  redes(): FormArray {
    return this.formacionForm.get('redes') as FormArray;
  }

  newRedes(): FormGroup {
    return this.fb.group({
      red: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required])
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
      empresa: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      fIni: new FormControl('', [Validators.required]),
      fFin: new FormControl('')
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
    return this.formacionForm.get('educacion') as FormArray;
  }

  newFormacion(): FormGroup {
    return this.fb.group({
      institucion: new FormControl('', [Validators.required]),
      denominacion: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      nota: new FormControl(''),
      fIni: new FormControl('', [Validators.required]),
      fFin: new FormControl('')
    });
  }


  addFormacion() {
    this.formacion().push(this.newFormacion());
  }

  addDatosFormacion() {
    this.formacion().push(this.datosFormacion(this.denominación, this.institucion, this.descripcion, this.fIni, this.fFin, this.nota));
  }

  addExp() {
    this.expLaboral().push(this.datosExp(this.empresa, this.cargo, this.descripcionE, this.fIniE, this.fFinE));
  }

  addIdioma() {
    this.idiomas().push(this.datosIdiomas(this.idioma, this.nivel));
  }

  addRed() {
    this.redes().push(this.datosRedes(this.red, this.usuario));
  }

  addCertificado() {
    this.certificados().push(this.datosCertificados(this.certificado, this.expedicion, this.fecha));
  }

  addConocimientos() {
    this.conocimientos().push(this.datosConocimientos(this.conocimiento));
  }

  removeFormacion(empIndex: number) {
    this.formacion().removeAt(empIndex);
  }


  actualizarCV() {

    if (this.formacionForm.valid) {
      console.log(this.formacionForm.value);
      this.user.cv = this.formacionForm.value

      console.log(this.user.cv);

      this.miServicio.updateCV(this.username, this.user).subscribe(data => {

        Swal.fire({
          title: 'CV actualizado con éxito',
          icon: 'success'
        });

      })

    } else {
      this.toastr.error('Todos los campos deben estar completos')

    }





  }


  //IDIOMAS

  idiomas(): FormArray {
    return this.formacionForm.get('idiomas') as FormArray;
  }

  newIdiomas(): FormGroup {
    return this.fb.group({
      idioma: new FormControl('', [Validators.required]),
      nivel: new FormControl('', [Validators.required]),
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
      certificado: new FormControl('', [Validators.required]),
      expedicion: new FormControl('', [Validators.required]),
      fecha: new FormControl('')
    });
  }

  addCertificados() {
    this.certificados().push(this.newCertificados());
  }

  removeCertificados(empIndex: number) {
    this.certificados().removeAt(empIndex);
  }

  //CONOCIMIENTOS

  conocimientos(): FormArray {
    return this.formacionForm.get('conocimientos') as FormArray;
  }

  newConocimiento(): FormControl {
    return new FormControl('', [Validators.required]);
  }

  addConocimiento() {
    this.conocimientos().push(this.newConocimiento());
  }

  removeConocimiento(empIndex: number) {
    this.conocimientos().removeAt(empIndex);
  }


}
