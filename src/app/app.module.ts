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

import { environment } from '../environments/environment'

import { ScCommonModule, AddOrgRequestInterceptor } from 'sc-common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormationRegistrationComponent } from './formation-registration/formation-registration.component';

import { RegistrationModule } from './registration/registration.module';

export function tokenGetter() {
  return localStorage.getItem('jwt-token');
}

@NgModule({
  declarations: [
    AppComponent,
    FormationRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ScCommonModule,

    //Angular basics
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    //JWT
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.whitelistedDomains,
        blacklistedRoutes: []
      }
    }),

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

    BrowserAnimationsModule,

    RegistrationModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AddOrgRequestInterceptor, multi: true},
    { provide: 'environment', useValue: environment }
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
