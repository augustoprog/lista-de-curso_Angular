import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { ListCursoComponent } from './Curso/lista-curso.component';
import { StarComponent } from './Curso/star/star.component';

 

@NgModule({
  declarations: [
    AppComponent,
    ListCursoComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
