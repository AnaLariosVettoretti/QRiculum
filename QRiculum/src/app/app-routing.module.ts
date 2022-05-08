import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCVComponent } from './editarCV/editarCV.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  /* { path: '', component: LoginComponent }, */
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'editarCV', component: EditarCVComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
