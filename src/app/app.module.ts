import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarCVComponent } from './editarCV/editarCV.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CvComponent } from './cv/cv.component';
import { ServicioUsuariosService } from './servicio-usuarios.service';
import { QrComponent } from './qr/qr.component';
import { QRCodeModule } from 'angular2-qrcode';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule} from '@angular/material/tooltip';
import { AvatarModule } from 'ngx-avatars';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    UsuarioComponent,
    EditarCVComponent,
    CvComponent,
    QrComponent,
      LandingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    QRCodeModule,
    HttpClientModule,
    MatTooltipModule,
    AvatarModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    })
  ],

  providers: [ServicioUsuariosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
