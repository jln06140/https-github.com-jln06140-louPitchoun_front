import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Enfant } from '../../model/enfant';
import { JourneeEnfant } from '../../model/journeeEnfant';

@Component({
  selector: 'app-popup-activite',
  templateUrl: './popup-activite.component.html',
  styleUrls: ['./popup-activite.component.css']
})
export class PopupActiviteComponent implements OnInit {

  activite = false;
  enfantSelected: Enfant;
  journee: JourneeEnfant;
  shortName;

  constructor(
    public dialogRef: MatDialogRef<PopupActiviteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.enfantSelected = data.enfant;
    this.journee = data.journee;
    console.log(this.journee);
  }

  ngOnInit() {
  }
  

  debuterActivite(){
    this.activite = true;
  }

  close() {
    this.dialogRef.close(this.journee);
  }
}
