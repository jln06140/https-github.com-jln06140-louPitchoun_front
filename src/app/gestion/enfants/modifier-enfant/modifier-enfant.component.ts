import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Enfant } from '../../../model/enfant';
import { EnfantService } from '../../../services/enfant.service';
import { ProfilService } from '../../../services/profil.service';
import { MatSnackBar } from '@angular/material';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-enfant',
  templateUrl: './modifier-enfant.component.html',
  styleUrls: ['./modifier-enfant.component.css']
})

export class ModifierEnfantComponent implements OnInit {

  id: number;
  EnfantForm: FormGroup;
  enfant: Enfant;
  enfantSeclected: Enfant;
  sectionSelected : string;
  sectionList: string[];
  dateFormat: Date;
  editDate = true;

  constructor(private formBuilder: FormBuilder,
              private enfantService: EnfantService,
              private profilService: ProfilService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.sectionList = ['Petit', 'Moyen', 'Grand'];
    this.id = +this.route.snapshot.paramMap.get('id');
    this.enfantService.getEnfant(this.id).subscribe(data => {
      this.enfantSeclected = data;
      this.initForm();
      this.dateFormat = this.enfantSeclected.enfantInfo.dateDeNaissance;
    });
  }

  initForm() {
    this.EnfantForm = this.formBuilder.group({
    enfantInfo: this.formBuilder.group({
      nom: [this.enfantSeclected.enfantInfo.nom, Validators.required],
      prenom: [this.enfantSeclected.enfantInfo.prenom, Validators.required],
      dateDeNaissance: '',
      allergie: this.enfantSeclected.enfantInfo.allergie,
      maladie: this.enfantSeclected.enfantInfo.maladie,
      biberon: this.enfantSeclected.enfantInfo.biberon
    }),
    section: [this.enfantSeclected.section, Validators.required],
    });
  }

  onEditDate() {
    this.editDate = (this.editDate) ? false : true;
  }


  onSubmitForm() {
    if(this.EnfantForm.valid) {
    this.enfant = this.EnfantForm.value;
    this.enfant.id = this.enfantSeclected.id;
    console.log(this.enfant);
    this.enfantService.updateEnfant(this.id, this.enfant).subscribe(
      () => {
        this.openSnackBar('Renseignements modifiés', 'Succes');
        this.router.navigate(['/gestion/listeEnfants']);
      }
    );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //get nom(){ return this.EnfantForm.get('enfantInfo.nom'); }
  get enfantInfo() { return this.enfantInfo.get('enfantInfo'); }
  affichenom(){ return this.enfantSeclected.enfantInfo.dateDeNaissance;}

}