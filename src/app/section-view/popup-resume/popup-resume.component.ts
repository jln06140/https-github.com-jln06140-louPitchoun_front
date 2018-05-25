import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JourneeServiceService } from '../../services/journee-service.service';
import { Enfant } from '../../model/enfant';
import { JourneeEnfant } from '../../model/journeeEnfant';

@Component({
  selector: 'app-popup-resume',
  templateUrl: './popup-resume.component.html',
  styleUrls: ['./popup-resume.component.css']
})
export class PopupResumeComponent implements OnInit {

  enfantSelected : Enfant;
  journeeEnCours: JourneeEnfant;

  constructor(
    private journeeService: JourneeServiceService,
    public dialogRef: MatDialogRef<PopupResumeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enfantSelected = data.enfant;
    this.journeeEnCours = data.journee;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
