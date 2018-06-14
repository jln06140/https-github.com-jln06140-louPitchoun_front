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
  viewParent = false;
  viewInfo = false;

  constructor(
    public dialogRef: MatDialogRef<PopupInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enfantSelected = data.enfant;
  }

  ngOnInit() {
  }

  informationParents() {
    this.viewParent ? this.viewParent = false : this.viewParent = true;
    // if (!this.viewParent) {
    //   this.viewParent = true;
    //   this.viewInfo = false;
    // } else {
    //   this.viewParent = false;
    //   this.viewInfo = true;
    // }
  }

  informationEnfant() {
    this.viewInfo ? this.viewInfo = false : this.viewInfo = true;
    // if (!this.viewInfo) {
    //   this.viewParent = false;
    //   this.viewInfo = true;
    // } else {
    //   this.viewParent = true;
    //   this.viewInfo = false;
    // }
  }

  close() {
    this.dialogRef.close();
  }

}
