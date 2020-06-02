import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

// import { NotFoundComponent } from './not-found/not-found.component';

import { FormationRegistrationComponent } from './formation-registration/formation-registration.component';

const routes: Routes = [
  { path: 'formation', component: FormationRegistrationComponent }, 
  { path: 'registration', redirectTo: 'registration/family', pathMatch: 'full' },
  { path: '', redirectTo: 'registration/family', pathMatch: 'full' },
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
