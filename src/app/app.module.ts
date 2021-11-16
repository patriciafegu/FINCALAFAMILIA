import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TipoProductoComponent } from './modulo-inventario/tipo-producto/tipo-producto.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { PersonaComponent } from './modulo-persona/persona/persona.component';



@NgModule({
  declarations: [
    AppComponent,
    TipoProductoComponent,
    PersonaComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
