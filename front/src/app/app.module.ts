import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { AgregarPostLocalComponent } from './agregar-post-local/agregar-post-local.component';
import { CommonService } from './service/common.service';
import { AgregarPostRemotoComponent } from './agregar-post-remoto/agregar-post-remoto.component';



@NgModule({
  declarations: [
  	RootComponent,   
    PrincipalComponent,
    ListaPostComponent,
    AgregarPostLocalComponent,
    AgregarPostRemotoComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
