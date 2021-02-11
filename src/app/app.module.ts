import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatatablehtmlComponent } from './components/datatablehtml/datatablehtml.component';
import { DatatablejsComponent } from './components/datatablejs/datatablejs.component';
import { ModaleditorComponent } from './components/modaleditor/modaleditor.component';
import { ModaloutputComponent } from './components/modaloutput/modaloutput.component';
import { ModaloutputjsComponent } from './components/modaloutputjs/modaloutputjs.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatablehtmlComponent,
    DatatablejsComponent,
    ModaleditorComponent,
    ModaloutputComponent,
    ModaloutputjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
