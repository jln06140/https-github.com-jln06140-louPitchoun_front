import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  
  utilisateur: Utilisateur;
  typeUtilisateur: any;
  nomSection: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.utilisateur = this.authService.utilisateurLogged = JSON.parse(localStorage.getItem('utilisateur'));
    this.typeUtilisateur = this.utilisateur.profil;
    console.log(JSON.stringify(this.utilisateur));
    this.loadTypeUtilisateur(this.typeUtilisateur);
    this.nomSection = this.utilisateur.section;
    
  }

  loadTypeUtilisateur (type: string){
    this.typeUtilisateur === 'EMPLOYE' ? this.nomSection = this.utilisateur.section.nom : this.nomSection = null;
  }

}
