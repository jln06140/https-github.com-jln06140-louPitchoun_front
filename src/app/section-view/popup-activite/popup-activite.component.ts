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
  repas = false;
  componentSieste = false;
  enfantSelected: Enfant;
  journee: JourneeEnfant;
  

  constructor(
    private siesteService: SiesteService,
    private snackBarService: SnackBarService,
    public dialogRef: MatDialogRef<PopupActiviteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.enfantSelected = data.enfant;
    this.journee = data.journee;
  }

  ngOnInit() {
  }


  debuterActivite() {
    this.activite ? this.activite = false : this.activite = true;
    if (this.activite === true) this.repas = false; this.sieste = false

  }

  ajouterSieste() {
    this.sieste ? this.sieste = false : this.sieste = true;
    if (this.sieste === true) this.repas = false; this.activite = false;
  }

  ajouterRepas() {
    this.repas ? this.repas = false : this.repas = true;
    if (this.repas === true) this.sieste = false; this.activite = false;
  }


  afficheComponent() {

  }

  close() {
    this.dialogRef.close(this.journee);
  }

  onAffichedActivite(afficheActivite: boolean) {
    !afficheActivite ? this.activite = false : this.activite = true;
    if (!afficheActivite) {
      this.snackBarService.openSnackBar("Activite ajoutée", "succes");
    }
  }

  onAffichedSieste(afficheSieste: boolean) {
    !afficheSieste ? this.sieste = false : this.sieste = true;
    if (!afficheSieste) {
      this.snackBarService.openSnackBar("Sieste ajoutée", "succes");
    }
  }

  onAffichedRepas(afficheRepas: boolean) {
    !afficheRepas ? this.repas = false : this.repas = true;
    if (!afficheRepas) {
      this.snackBarService.openSnackBar("Repas ajoutée", "succes");
    }
  }
}
