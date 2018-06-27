import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { HeaderestudianteComponent} from './component/compartidos/header_estudiante/headerestudiante.component';
import { BodyestudianteComponent} from './component/compartidos/body_estudiante/bodyestudiante.component';
import { BodyagregarComponent} from './component/compartidos/body_agregar/bodyagregar.component';
import { HeaderagregarComponent} from './component/compartidos/header_agregar/headeragregar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    HeaderestudianteComponent,
    BodyestudianteComponent,
    BodyagregarComponent,
    HeaderagregarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
