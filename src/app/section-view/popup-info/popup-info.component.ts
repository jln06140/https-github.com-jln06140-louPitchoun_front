import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Enfant } from '../../model/enfant';

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.css']
})
export class PopupInfoComponent implements OnInit {

  enfantSelected: Enfant;
  viewParent : boolean = false;
  viewInfo : boolean = true

  constructor(
    public dialogRef: MatDialogRef<PopupInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enfantSelected = data.enfant;
  
  }

  ngOnInit() {
  }

  informationParents(){
    if (!this.viewParent){
      this.viewParent = true;
      this.viewInfo = false;
    }
  }

  informationEnfant(){
    if (!this.viewInfo){
      this.viewParent = false;
      this.viewInfo = true;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
