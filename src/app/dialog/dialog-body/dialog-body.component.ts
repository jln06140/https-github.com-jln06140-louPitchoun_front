import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Enfant } from '../../model/enfant';
import { EnfantService } from '../../services/enfant.service';
import { filter, map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Parent } from '../../model/parent';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  parent: Parent;
  enfants: Enfant[];
  sectionList : String[];
  enfantsSelected: Enfant;
  selectedSection: string;
  nomRenseigne: string;

  constructor(
      public enfantService: EnfantService,
      public dialogRef: MatDialogRef<DialogBodyComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any){
        this.parent = data;
      }

   ngOnInit() {
     this.enfantService.getAllEnfants().subscribe(
       data => this.enfants = data
    )
     this.sectionList = ['Petit', 'Moyen', 'Grand'];
   }


  // onClickSection() {
  //   this.enfantsSelected = this.enfants.filter(
  //     enfant => enfant.section === this.selectedSection);
  // }

  // searchEnfant(){
  //   this.enfantsSelected = this.enfants;
  //   this.enfantsSelected.filter(data => data.enfantInfo.nom === this.nomRenseigne);
  // }

  choixEnfant(enfant: any){
    console.log(enfant);
    this.enfantsSelected = enfant;

    console.log(JSON.stringify(this.enfantsSelected));
  }

  close() {
    this.dialogRef.close();
  }
  associer(){
    this.parent.enfants.push(this.enfantsSelected);
    console.log(JSON.stringify(this.parent));
  }

}
