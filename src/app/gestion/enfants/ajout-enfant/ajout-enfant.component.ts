import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EnfantService } from '../../../services/enfant.service';
import { Enfant } from '../../../model/enfant';
import { ProfilService } from '../../../services/profil.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.css']
})
export class AjoutEnfantComponent implements OnInit {

  EnfantForm: FormGroup;
  enfant: Enfant;
  sectionSelected = 'PETIT';
  sectionList: string[];

  constructor(private formBuilder: FormBuilder,
              private enfantService: EnfantService,
              private profilService: ProfilService,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sectionList = ['Petit', 'Moyen', 'Grand'];
    this.initForm();
    console.log(this.sectionList);
  }

  initForm() {
    this.EnfantForm = this.formBuilder.group({
    enfantInfo: this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateDeNaissance: '',
      allergie: false,
      maladie: false,
      biberon: false
    }),
    section: ['', Validators.required],
    });


  }


  onSubmitForm() {
    if(this.EnfantForm.valid){
    this.enfant = this.EnfantForm.value;
    console.log(this.enfant);
    this.enfantService.addEnfant(this.enfant).subscribe(
      () => {
        this.openSnackBar('Enfant ajouté','Succes');
      }
    );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  get nom(){ return this.EnfantForm.get('enfantInfo').get('nom'); }
  get enfantInfo() { return this.enfantInfo.get('enfantInfo'); }

}
