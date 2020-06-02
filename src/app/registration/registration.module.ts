import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ScCommonModule } from 'sc-common';

import { RegistrationRoutingModule } from './registration-routing.module';

import { FamilyInputComponent } from './family-input/family-input.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';

@NgModule({
  declarations: [
    FamilyInputComponent,
    PersonInputComponent,
    RegistrationConfirmationComponent
  ],
  imports: [
    BrowserModule,

    RegistrationRoutingModule,

    ScCommonModule,

    //Angular basics
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    //Bootstrap
    NgbModule,
    NgbModalModule,

    //Material
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDialogModule,

    BrowserAnimationsModule
  ]
})
export class RegistrationModule { }
