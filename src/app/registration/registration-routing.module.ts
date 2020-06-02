import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyInputComponent } from './family-input/family-input.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';


const routes: Routes = [
  { path: 'registration/family', component: FamilyInputComponent },
  { path: 'registration/person', component: PersonInputComponent },
  { path: 'registration/confirm', component: RegistrationConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
