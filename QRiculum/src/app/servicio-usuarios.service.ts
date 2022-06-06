import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(`${API_BASE}/usuarios`);
  }

  getOne(id:string){
    return this.http.get(`${API_BASE}/usuarios/${id}`);
  }

  validate(id:string, contrasenia: string){

    return this.http.get(`${API_BASE}/usuarios/user?id=${id}&hash=${contrasenia}`);

  }

  create(usuario:any){
    return this.http.post(`${API_BASE}/usuarios`, usuario);
  }

  update(id:string, usuario:any){
    return this.http.post(`${API_BASE}/usuarios/${id}`, usuario);
  }

  delete(id:string){
    return this.http.delete(`${API_BASE}/usuarios/${id}`);
  }

  login(username: string, contrasenia: string) {

    const user = {
      usuario: 'JuanPerez95',
      nombre: 'Juan',
      apellido1: 'Pérez',
      apellido2: 'García',
      email: 'jupergar@gmail.com',
      contrasenia: '123456',
      telefono1: '678453275',
      telefono2: '643652785',
      ciudad: 'Madrid'
    }

    return user;
  }

  obtenerDatosUsuario(username: string) {

    const user = {
      usuario: 'JuanPerez95',
      nombre: 'Juan',
      apellido1: 'Pérez',
      apellido2: 'García',
      email: 'jupergar@gmail.com',
      contrasenia: '123456',
      telefono1: '678453275',
      telefono2: '643652785',
      ciudad: 'Madrid'
    }
    return user;
  }

  obtenerCVUsuario(username: string) {

    const user = {
      usuario: 'JuanPerez95',
      nombre: 'Juan',
      apellido1: 'Pérez',
      apellido2: 'García',
      email: 'jupergar@gmail.com',
      contrasenia: '123456',
      telefono1: '678453275',
      telefono2: '643652785',
      ciudad: 'Madrid',
      cv: {
        sobreMi: 'Desarrollador con amor por la tecnología y el desarrollo web.  Amplia experiencia con diversas tecnologías y trabajando en equipo. Disponible para trabajar en cualquier parte de España o teletrabajar.',
        educacion: [
          {
            institucion: 'IES Albarregas',
            denominacion: 'Grado superior de desarrollo de aplicaciones web',
            descripcion: 'Java, Hibernate, JavaScript, JQuery, MySQL, Apache, TomCat',
            nota: '8.5',
            fIni: '2020-09-20',
            fFin: '2022-06-25'
          },
          {
            institucion: 'IES Castelar',
            denominacion: 'Grado superior de desarrollo de aplicaciones multiplataforma',
            fIni: '2018-09-25',
            fFin: '2020-06-20'
          }
        ],
        expLaboral: [
          {
            empresa: 'Plexus',
            cargo: 'Junior Angular developer',
            descripcion: 'Colaboración en creación de aplicación web para compañía eléctrica. Utilización de Sonar, Lint, Bootstrap 5, Angular Material...',
            fIni: '2019-06-29',
            fFin: '2021-01-15'
          },
          {
            empresa: 'Accenture',
            cargo: 'Senior Angular developer',
            descripcion: 'Creación de aplicación web para entidad bancaria',
            fIni: '2021-01-15',
            fFin: ''
          }
        ],
        idiomas: [
          {
            idioma: 'inglés',
            certificado: 'Escuela oficial de idiomas',
            nivel: 'C1'
          },
          {
            idioma: 'francés',
            nivel: 'A2'
          }
        ],
        conocimientos: [
          'Angular 13' ,
          'TypeScript' ,
          'MySQL' ,
          'MongoDB' 
        ],
        certificados: [
          {
            certificado: 'Professional Cloud Architect',
            expedicion: 'Google',
            fecha: '2021-07-14'
          },
          {
            certificado: 'AWS Associate Solutions Architect Training',
            expedicion: 'Amazon',
            fecha: '2021-10-30'
          }
        ],
        redes: [
          {
            red: 'linkedin',
            usuario: 'juanperezgarcia'
          },
          {
            red: 'github',
            usuario: 'jupergar95'
          },
          {
            red: 'twitter',
            usuario: 'jupergar95'
          },
          {
            red: 'instagram',
            usuario: 'juanperezgarcia95'
          }
        ]
      }
    }

    return user;
  }

}
