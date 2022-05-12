import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

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
    ciudad: 'Madrid',
    cv: {
      sobreMi: 'Desarrollador con amor por la tecnología y el desarrollo web.  Amplia experiencia con diversas tecnologías y trabajando en equipo. Disponible para trabajar en cualquier parte de España o teletrabajar.',
      educacion: [
        {
          institucion: 'IES Albarregas',
          denominacion: 'Grado superior de desarrollo de aplicaciones web',
          descripcion: 'Java, Hibernate, JavaScript, JQuery, MySQL, Apache, TomCat',
          nota: '8.5',
          fIni: '20/09/2020',
          fFin: '20/06/2022'
        },
        {
          institucion: 'IES Castelar',
          denominacion: 'Grado superior de desarrollo de aplicaciones multiplataforma',
          fIni: '25/09/2018',
          fFin: '25/06/2020'
        }
      ],
      expLaboral: [
        {
          empresa: 'Plexus',
          cargo: 'Junior Angular developer',
          descripcion: 'Colaboración en creación de aplicación web para compañía eléctrica. Utilización de Sonar, Lint, Bootstrap 5, Angular Material...',
          fIni: '29/06/2019',
          fFin: '15/01/2021'
        },
        {
          empresa: 'Accenture',
          cargo: 'Senior Angular developer',
          descripcion: 'Creación de aplicación web para entidad bancaria',
          fIni: '15/01/2021',
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
        { conocimiento: 'Angular 13' },
        { conocimiento: 'TypeScript' },
        { conocimiento: 'MySQL' },
        { conocimiento: 'MongoDB' },
      ],
      certificados: [
        {
          certificado: 'Professional Cloud Architect',
          expedicion: 'Google',
          fecha: '2021'
        },
        {
          certificado: 'AWS Associate Solutions Architect Training',
          expedicion: 'Amazon',
          fecha: '2021'
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
        },
      ]
    }
  }

  ngOnInit() {

  }

}
