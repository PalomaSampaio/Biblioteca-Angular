import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { ListaBibliotecaComponent } from './biblioteca/lista-biblioteca/lista-biblioteca.component';
import { AddEditBibliotecaComponent } from './biblioteca/add-edit-biblioteca/add-edit-biblioteca.component';
import { BibliotecaApiService } from './biblioteca-api.service';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    ListaBibliotecaComponent,
    AddEditBibliotecaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BibliotecaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
