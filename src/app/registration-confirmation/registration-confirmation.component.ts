import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { differenceInYears } from 'date-fns';

import { SCValidation, Family, PersonService } from 'sc-common';

import { FamilyRegistrationService } from '../services/family-registration.service';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {

  family: Family;
  constructor(private router: Router,
              public familyRegistrationService: FamilyRegistrationService) {
    this.family = familyRegistrationService.family;
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['family']);
  }

  register() {
    this.familyRegistrationService.registerFamily(this.family).subscribe(() => {
      this.familyRegistrationService.clear();
      this.family = null;
    });
  }

  currentAge(birthdate: Date): number {
    return differenceInYears(new Date(), birthdate);
  }
}
