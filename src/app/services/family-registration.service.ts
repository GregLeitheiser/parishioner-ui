import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from 'sc-common';

import { ApiLocatorService } from 'sc-common';
import { LoginService } from 'sc-common';
import { BaseService } from 'sc-common';

import { Family } from 'sc-common';

@Injectable({
  providedIn: 'root'
})
export class FamilyRegistrationService extends BaseService {

  private url: string;

  constructor(protected http: HttpClient,
              protected messageService: MessageService,
              protected loginService: LoginService,
              protected apiService: ApiLocatorService) {
    super(http, messageService, loginService);
    this.url = apiService.prefaceUrl('/rest/registration');
  }

  get family(): Family {
    return JSON.parse(sessionStorage.getItem('family'));
  }

  set family(family: Family) {
    sessionStorage.setItem('family', JSON.stringify(family));
  }

  clear() {
    sessionStorage.removeItem('family');
  }

  registerFamily(family: Family): Observable<void> {
    return this.http.post(this.url, family, this.httpOptions).pipe(
        tap(item => this.log('Family Registered!')),
        catchError(this.handleError('Registration could not be completed at this time.', null))
      );
  }
}
