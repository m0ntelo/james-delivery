import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { EstablishmentsComponent } from './pages/establishments/establishments.component';
import { SingleEstablishmentComponent } from './pages/single-establishment/single-establishment.component';
import { CardComponent } from './components/card/card.component';
import { SingleInputComponent } from './components/single-input/single-input.component';
import { DoubleInputComponent } from './components/double-input/double-input.component';
import { SelectComponent } from './components/select/select.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LocalStorageService } from './service/localStorage.service';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { IMaskModule } from 'angular-imask';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MatSnackBarModule } from  '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentsComponent,
    SingleEstablishmentComponent,
    CardComponent,
    SingleInputComponent,
    DoubleInputComponent,
    SelectComponent,
    NotFoundComponent,
    HeaderComponent,
    ButtonComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    IMaskModule,
    NgHttpLoaderModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
