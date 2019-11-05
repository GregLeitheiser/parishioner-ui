import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy-dialog',
  templateUrl: './dummy-dialog.component.html',
  styleUrls: ['./dummy-dialog.component.scss']
})
export class DummyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DummyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();    
  }
}
