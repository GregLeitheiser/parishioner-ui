import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { SCValidation, Family, PersonService } from 'sc-common';

import { FamilyRegistrationService } from '../services/family-registration.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {

  personForm = this.fb.group({
      name: ['', Validators.required],
      maidenName: [''],
      nickname: [''],
      salutation: ['Mr.', Validators.required],
      suffix: [''],
      male: true,
      email: ['', [Validators.pattern(SCValidation.EMAIL)]],
      phoneNumbers: [null],
      headOfHousehold: [true],
      birthdate: [''],
      memberSince: [new Date()],
      parishioner: [true],
      baptized: [''],
      confession: [''],
      communion: [''],
      confirmed: [''],
      holyOrders: [''],
      maritalStatus: [null],
      ethnicity: [null],
      primaryLanguage: [null],
      religion: ['CATHOLIC'],
      specialNeeds: [[]],
      occupation: ['']
    });

  public maritalStatuses = this.personService.getMaritalStatuses.bind(this.personService);
  public ethnicities = this.personService.getEthnicities.bind(this.personService);
  public languages = this.personService.getLanguages.bind(this.personService);
  public religions = this.personService.getReligions.bind(this.personService);
  public specialNeeds = this.personService.getSpecialNeeds.bind(this.personService);

  constructor(private fb: FormBuilder,
              private router: Router,
              public personService: PersonService,
              public familyRegistrationService: FamilyRegistrationService) { }

  ngOnInit() {
  }

  addAnother() {
    this.addPersonToFamily();

    const ethnicity = this.personForm.get('ethnicity').value;
    const language = this.personForm.get('primaryLanguage').value;

    this.personForm.reset();
    this.personForm.get('parishioner').setValue(true);
    this.personForm.get('memberSince').setValue(new Date());
    this.personForm.get('religion').setValue('CATHOLIC');
    this.personForm.get('ethnicity').setValue(ethnicity);
    this.personForm.get('primaryLanguage').setValue(language);
    this.personForm.get('male').setValue(false);
  }

  back() {
    this.router.navigate(['family']);
  }

  next() {
    this.addPersonToFamily();
    this.router.navigate(['confirm']);
  }

  private addPersonToFamily() {
    const person = this.personForm.value;
    const family = this.familyRegistrationService.family;
    if(!family.members)
      family.members=[];
    family.members.push(person);
    this.familyRegistrationService.family = family;
  }
}
