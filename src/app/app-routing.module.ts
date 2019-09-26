import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// import { NotFoundComponent } from './not-found/not-found.component';

import { FamilyInputComponent } from './family-input/family-input.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';

const routes: Routes = [
  { path: 'registration/family', component: FamilyInputComponent},
  { path: 'registration/person', component: PersonInputComponent},
  { path: 'registration/confirm', component: RegistrationConfirmationComponent},
  { path: '', redirectTo: '/registration/family', pathMatch: 'full' },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
