import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { SCValidation, Family, PersonService, Person } from 'sc-common';

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
      birthdate: ['', Validators.required],
      memberSince: [new Date()],
      parishioner: [true],
      baptized: [''],
      confession: [''],
      communion: [''],
      confirmed: [''],
      holyOrders: [''],
      maritalStatus: [null, Validators.required],
      ethnicity: [null, Validators.required],
      primaryLanguage: [null, Validators.required],
      religion: ['CATHOLIC', Validators.required],
      specialNeeds: [[]],
      occupation: [''],
      preferences: {}
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
    this.personForm.get('male').valueChanges.subscribe(isMale => {
        const predictedSalutation = isMale? 'Mr.': this.isLikelySpouse()? 'Mrs.': 'Ms.';
        this.personForm.get('salutation').setValue(predictedSalutation);
      })
  }

  addAnother() {
    const lastPerson = this.addPersonToFamily();

    const ethnicity = this.personForm.get('ethnicity').value;
    const language = this.personForm.get('primaryLanguage').value;

    this.personForm.reset();
    this.personForm.get('parishioner').setValue(true);
    this.personForm.get('memberSince').setValue(new Date());
    this.personForm.get('religion').setValue('CATHOLIC');
    this.personForm.get('ethnicity').setValue(ethnicity);
    this.personForm.get('primaryLanguage').setValue(language);
    this.personForm.get('male').setValue(true);


    if(this.isLikelySpouse()) {
      this.personForm.get('maritalStatus').setValue(lastPerson.maritalStatus);
      this.personForm.get('male').setValue(!lastPerson.male);
    }
  }

  private isLikelySpouse(): boolean {
    const familyMembers = this.familyRegistrationService.family.members;
    return familyMembers.length == 1 && familyMembers[0].maritalStatus.startsWith("MARRIED");
  }

  back() {
    this.router.navigate(['registration', 'family']);
  }

  next() {
    this.addPersonToFamily();
    this.router.navigate(['registration', 'confirm']);
  }

  generateHeader(): string {
    const members = this.familyRegistrationService.family.members;
    if(!members || members.length == 0)
      return "Please tell us about the head of your household.";
    else if(members.length == 1 && members[0].maritalStatus.startsWith('MARRIED'))
      return `Please tell us about ${members[0].name.split(' ')[0]}'s spouse.`;
    else           
      return "Please tell us about another person.";
  }

  private addPersonToFamily(): Person {
    const person = this.personForm.value;
    const family = this.familyRegistrationService.family;
    if(!family.members)
      family.members=[];
    family.members.push(person);
    this.familyRegistrationService.family = family;
    return person;
  }
}
