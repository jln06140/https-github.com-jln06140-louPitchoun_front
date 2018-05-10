import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../tools/custom-validators';
import { Utilisateur } from '../../../model/Utilisateur';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {
  utilisateurSelected: Utilisateur;
  id: number;
  isEmploye: boolean;

  constructor(
    private route: ActivatedRoute,
    private utilisateurService: UtilisateurService,
    private formBuiler: FormBuilder
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.utilisateurService.getUtilisateur(this.id).subscribe(data => {
      this.utilisateurSelected = data;
      this.isEmploye = this.utilisateurSelected.profil==='EMPLOYE';
    });
  }

  getInfo() {
    return this.utilisateurSelected.infoUserDto;
  }

  getNomPrenom() {
    return this.getInfo().nom + ' ' + this.getInfo().prenom;
  }

  getProfilLebelle() {
    return this.utilisateurSelected.profil;
  }

}
