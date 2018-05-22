import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-activite',
  templateUrl: './dialog-activite.component.html',
  styleUrls: ['./dialog-activite.component.css']
})
export class DialogActiviteComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DialogActiviteComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
      }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
