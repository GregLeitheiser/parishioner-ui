import { Injectable } from '@angular/core';

import { Family } from 'sc-common';

@Injectable({
  providedIn: 'root'
})
export class FamilyRegistrationService {

  constructor() {}

  get family(): Family {
    return JSON.parse(sessionStorage.getItem('family'));
  }

  set family(family: Family) {
    sessionStorage.setItem('family', JSON.stringify(family));
  }

  clear() {
    sessionStorage.removeItem('family');
  }
}
