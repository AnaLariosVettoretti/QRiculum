import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { EditarCVComponent } from './editarCV/editarCV.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { QrComponent } from './qr/qr.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  /* { path: '', component: LoginComponent }, */
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'editarCV', component: EditarCVComponent},
  { path: 'cv', component: CvComponent},
  { path: 'qrUsuario', component: QrComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
