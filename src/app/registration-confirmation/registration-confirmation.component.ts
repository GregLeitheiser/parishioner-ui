import { Component, OnInit } from '@angular/core';
import { SCValidation, Family, PersonService } from 'sc-common';

import { FamilyRegistrationService } from '../services/family-registration.service';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {

  family: Family;
  constructor(public familyRegistrationService: FamilyRegistrationService) {
    this.family = familyRegistrationService.family;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['registration/person']);
  }

  register() {
    alert("Submitting registration for: " + JSON.stringify(family));
    this.familyRegistrationService.clear();
    this.family = null;
  }
}
