import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule { }
