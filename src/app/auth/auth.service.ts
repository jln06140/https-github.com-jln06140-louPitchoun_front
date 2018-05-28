import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/Utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { ParentService } from '../services/parent.service';

@Injectable()
export class AuthService {

  isEmploye: boolean;
  isParent: boolean;
  isAdmin: boolean;
  utilisateurLogged: Utilisateur;

  private loggedIn = new BehaviorSubject<boolean>(false);
  private Utilisateurs: Utilisateur[];

  get isLoggedin() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router,
    private utilisateurService: UtilisateurService,
    private parentService: ParentService
  ) { }

  login(utilisateur: any) {
    this.utilisateurService.getUtilisateurByUsernameAndPassword(utilisateur.userName, utilisateur.password).subscribe(
      (data) => {
        this.utilisateurLogged = data;
        localStorage.setItem('utilisateur', JSON.stringify(data));
        console.log(data.profil);
        this.setProfil(data.profil);
        console.log('profilemp' + this.isEmploye + ', profParent ' + this.isParent);
        this.router.navigate(['/dashboard']);
      }

      ,
      (error) => {
        console.log(error.message);
      }
    );
    // recuperer et verifier utilisateur
    // comparer que email existe sinon erreur
    // sinon comparer email et mot de passe correspondent
    // if (utilisateur.login !== '' && utilisateur.motDePasse !== '') {
    this.loggedIn.next(true);

    // }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  setProfil(profil: string) {
    console.log(profil);
    profil === 'PARENT' ? this.isParent = true : this.isParent = false;
    profil === 'EMPLOYE' ? this.isEmploye = true : this.isEmploye = false;
    profil === 'ADMIN' ? this.isAdmin = true : this.isAdmin = false;
  }
}
