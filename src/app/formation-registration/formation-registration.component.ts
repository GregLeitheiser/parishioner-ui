import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { Family, Program, Section } from 'sc-common';
import { PersonService, FamilyService, ProgramService, SectionService } from 'sc-common';
import { SCValidation } from 'sc-common';


@Component({
  selector: 'app-formation-registration',
  templateUrl: './formation-registration.component.html',
  styleUrls: ['./formation-registration.component.scss']
})
export class FormationRegistrationComponent implements OnInit {

  program: Program;
  family: Family;
  sections: Section[];


  form = this.fb.group({
      familyId: ['', Validators.required],
      programId: ['', Validators.required]
      // enrolleeId: ['', Validators.required],
      // classroomId: [''],
      // schoolGrade: [''],
      // sacramentalGroupId: ['']
    });

  constructor(private fb: FormBuilder,
              public programService: ProgramService,
              public sectionService: SectionService,
              public personService: PersonService,
              public familyService: FamilyService) { }
  
  ngOnInit() { 
    this.form.get("familyId").valueChanges.subscribe(id => {
        if(id > 0)
          this.familyService.get(id).subscribe(family => this.family = family);
      });

    this.form.get("programId").valueChanges.subscribe(id => {
        if(id > 0)
          this.programService.get(id).subscribe(program => this.program = program);
          this.sectionService.getPage(0, -1, '', {"programId": id})
              .subscribe(resp => {
                  this.sections = resp.results;
          });
      });
  }

  save() {
    // if(!this.form.valid) {
    //   this.cancel();
    //   return;
    // }

    // const value = this.form.value;
    // if(this.form.get("id").value > 0) {
    //   this.registrationService.update(value).
    //     subscribe(() => {
    //       this.dialogRef.close();
    //     });
    // } else {
    //   this.registrationService.create(value).
    //     subscribe(() => {
    //       this.dialogRef.close();
    //     });
    // }
  }
}
