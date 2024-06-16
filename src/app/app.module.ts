import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderGiangmaComponent } from './header-giangma/header-giangma.component';
import { FooterGiangmaComponent } from './footer-giangma/footer-giangma.component';
import { BooksGiangmaComponent } from './books-giangma/books-giangma.component';
import { CampusGiangmaComponent } from './campus-giangma/campus-giangma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderGiangmaComponent,
    FooterGiangmaComponent,
    BooksGiangmaComponent,
    CampusGiangmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
