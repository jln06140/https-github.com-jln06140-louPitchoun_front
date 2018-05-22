import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  
  utilisateur: Utilisateur;
  typeUtilisateur: any;
  nomSection: string;

  constructor() { }

  ngOnInit() {
    this.utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    JSON.stringify(this.utilisateur);
    this.typeUtilisateur = this.utilisateur.profil.libelle;
    console.log(this.typeUtilisateur);
    this.nomSection = this.utilisateur.section.nom;
  }

}
