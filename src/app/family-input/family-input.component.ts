import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { SCValidation, Family, FamilyService, OrganizationService } from 'sc-common';

import { FamilyRegistrationService } from '../services/family-registration.service';

@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.scss']
})
export class FamilyInputComponent implements OnInit {

  familyForm = this.fb.group({
      surname: ['', Validators.required],
      homePhone: ['', Validators.pattern(SCValidation.PHONE)],
      address: null,
      preferences: null
    });


  constructor(private fb: FormBuilder,
              private router: Router,
              public organizationService: OrganizationService,
              public familyServie: FamilyService,
              private familyRegistrationService: FamilyRegistrationService) { }

  ngOnInit() {
  }

  next() {
    const family = this.familyForm.value;
    family.members=[];
    this.familyRegistrationService.family = family;
    this.router.navigate(['person']);
  }
}
