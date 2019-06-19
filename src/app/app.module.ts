import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtenteDetailsComponent } from './utente-details/utente-details.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { UtenteService } from './utente.service';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    UtenteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    GalleriaModule,
    FileUploadModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule
  ],

  providers: [
    UtenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
