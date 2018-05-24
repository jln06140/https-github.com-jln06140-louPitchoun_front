import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Enfant } from '../../model/enfant';
import { JourneeEnfant } from '../../model/journeeEnfant';
import { SnackBarService } from '../../services/snack-bar.service';
import { SiesteService } from '../../services/sieste.service';

@Component({
  selector: 'app-popup-activite',
  templateUrl: './popup-activite.component.html',
  styleUrls: ['./popup-activite.component.css']
})
export class PopupActiviteComponent implements OnInit {

  activite = false;
  sieste = false;
  enfantSelected: Enfant;
  journee: JourneeEnfant;
  shortName;

  constructor(
    private siesteService: SiesteService,
    private snackBarService : SnackBarService,
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
    this.activite ? this.activite = false : this.activite = true;
    console.log(this.activite);
  }

  debuterSieste(){
    this.siesteService.debuterSieste(this.enfantSelected.id).subscribe(
      (data) => {
        console.log(data);
        this.sieste ? this.sieste = false : this.sieste = true;
        console.log(this.sieste);
        this.snackBarService.openSnackBar("Sieste demarrée", "Succes");
      }
    );
    
   
  }

  close() {
    this.dialogRef.close(this.journee);
  }

  onAffiched(affiche: boolean){
    !affiche ? this.activite = false : this.activite = true;
    if (!affiche){
      this.snackBarService.openSnackBar("Activite ajoutée","succes");
    }
  }
}
