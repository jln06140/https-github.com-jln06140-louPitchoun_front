import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Enfant } from '../../model/enfant';

@Component({
  selector: 'app-popup-activite',
  templateUrl: './popup-activite.component.html',
  styleUrls: ['./popup-activite.component.css']
})
export class PopupActiviteComponent implements OnInit {

  activite = false;
  enfantSelected: Enfant;

  constructor(
    public dialogRef: MatDialogRef<PopupActiviteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enfantSelected = data;
  }

  ngOnInit() {}

  debuterActivite(){
    this.activite = true;
  }

  close() {
    this.dialogRef.close();
  }
}
