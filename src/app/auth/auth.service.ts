import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/Utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';
import { ParentService } from '../services/parent.service';
import { SnackBarService } from '../services/snack-bar.service';

@Injectable()
export class AuthService {
  isEmploye: boolean;
  isParent: boolean;
  isAdmin: boolean;
  utilisateurLogged: Utilisateur;
  errorMsg: string;
  isError = false;

  private loggedIn = new BehaviorSubject<boolean>(false);
  public profil = new BehaviorSubject<any>(null);

  private Utilisateurs: Utilisateur[];

  get isLoggedin() {
    return this.loggedIn.asObservable();
  }

  get quelProfil() {
    return this.profil.asObservable();
  }

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService,
    private parentService: ParentService,
    private snckBar : SnackBarService
  ) {
    this.profil = new BehaviorSubject(null);
  }


  login(utilisateur: any) {
    this.utilisateurService
      .getUtilisateurByUsernameAndPassword(
        utilisateur.userName,
        utilisateur.password
      )
      .subscribe(
        data => {
          this.utilisateurLogged = data;
          localStorage.setItem('utilisateur', JSON.stringify(data));
          sessionStorage.setItem('profil', data.profil);
          sessionStorage.setItem('isLogged', JSON.stringify(true));
          this.loggedIn.next(true);
          this.setProfil(data.profil);
          console.log(
            'profilemp' + this.isEmploye + ', profParent ' + this.isParent
          );
          if (this.isAdmin) {
            this.router.navigate(['/gestion/listeUtilisateur']);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },

        err => {
          this.errorMsg = err.error.message;
          this.snckBar.openSnackBar(this.errorMsg, 'Echec');
        }
      );
    // recuperer et verifier utilisateur
    // comparer que email existe sinon erreur
    // sinon comparer email et mot de passe correspondent
    // if (utilisateur.login !== '' && utilisateur.motDePasse !== '') {

    // }
  }

  logout() {
    this.loggedIn.next(false);
    console.log('logout');
    sessionStorage.clear();
    this.navigateToLogin();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  setProfil(profil: string) {
    console.log(profil);
    profil === 'PARENT' ? (this.isParent = true) : (this.isParent = false);
    profil === 'EMPLOYE' ? (this.isEmploye = true) : (this.isEmploye = false);
    profil === 'ADMIN' ? (this.isAdmin = true) : (this.isAdmin = false);
  }
}
