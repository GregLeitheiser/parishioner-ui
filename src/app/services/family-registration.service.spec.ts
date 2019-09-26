import { TestBed } from '@angular/core/testing';

import { FamilyRegistrationService } from './family-registration.service';

describe('FamilyRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyRegistrationService = TestBed.get(FamilyRegistrationService);
    expect(service).toBeTruthy();
  });
});
