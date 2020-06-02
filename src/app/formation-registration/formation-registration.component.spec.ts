import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationRegistrationComponent } from './formation-registration.component';

describe('FormationRegistrationComponent', () => {
  let component: FormationRegistrationComponent;
  let fixture: ComponentFixture<FormationRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
