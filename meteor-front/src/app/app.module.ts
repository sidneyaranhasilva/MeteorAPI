import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DispositivoComponent } from './dispositivos/dispositivo/dispositivo.component';
import { HttpClientModule } from '@angular/common/http';
import { DadosComponent } from './dispositivos/dados/dados.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DispositivoComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
