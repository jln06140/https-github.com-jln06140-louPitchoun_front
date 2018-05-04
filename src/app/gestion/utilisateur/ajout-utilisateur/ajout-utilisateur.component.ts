import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilisateur } from '../../../model/Utilisateur';

import { Profil } from '../../../model/profil';
import { ProfilService } from '../../../services/profil.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { InformationService } from '../../../services/information.service';
import { InformationParent } from '../../../model/informationParent';
import { InformationEmploye } from '../../../model/InformationEmploye';


@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {
  UtilisateurForm: FormGroup;
  parent: boolean;
  isLinear = true;
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  profiSelected: Profil;
  informationSelected;
  utilisateurCreated: Utilisateur;
  email;

  constructor(private formBuilder: FormBuilder,
              private profilService: ProfilService,
              private utilisateurService: UtilisateurService,
              private informationService: InformationService) {}

  ngOnInit() {
    this.inifForm1();
    this.inifForm2();
    this.initForm3();
    // this.initForm();
  }

  inifForm1() {
    this.firstFormGroup = this.formBuilder.group({
      profil: ['', Validators.required]
    });
  }

  inifForm2() {
    this.secondFormGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      email: ['', Validators.email],
      telMobile: ['', Validators.required],
      telFixe: '',
      telPro: '',
      fonction: '',

    });
  }

  initForm3() {
    this.thirdFormGroup = this.formBuilder.group({
      motDePasse: ['', Validators.required],
      confMdp: ['', Validators.required]
    });
  }

  chargeFormulaire(profil: string) {
    if (profil === 'parent') {
      this.parent = true;
      //getprofil parent
    } else {
      this.parent = false;
      //get profil employe
    }
  }


  onSubmitForm1() {
     const form1value = this.firstFormGroup.value;
     this.profilService.getprofilByLibelle(form1value['profil']).subscribe(
       profil => this.profiSelected = profil
     );
  }

  onSubmitForm2() {
    const form2value = this.secondFormGroup.value;
    console.log(form2value);
    this.email = form2value['email'];
    if (parent) {
      this.informationSelected = new InformationParent(
        form2value['nom'],
        form2value['prenom'],
        form2value['email'],
        form2value['adresse'],
        form2value['ville'],
        form2value['telMobile'],
        form2value['telFixe'],
        form2value['telPro']
      );
    }
     else {
      this.informationSelected = new InformationEmploye(
        form2value['nom'],
        form2value['prenom'],
        form2value['email'],
        form2value['adresse'],
        form2value['ville'],
        form2value['telMobile'],
        form2value['telFixe'],
        form2value['telPro'],
        form2value['fonction']
      );
    }

    console.log(this.informationSelected);
  }

  onSubmitForm3() {
    const form3value = this.thirdFormGroup.value;
    this.utilisateurCreated = new Utilisateur(
      this.email,
      form3value['motDePasse'],
      new Date(),
      this.informationSelected,
      this.profiSelected

  //   formValue["motDePasse"],
  //   formValue["profil"]
  );
  }

  onSubmitForm() {
   this.utilisateurService.addUtilisateur(this.utilisateurCreated).subscribe(
     ()=>console.log('utilisateur ajouté')
   );
    // console.log(JSON.stringify(newUtilisateur));
  }
}
