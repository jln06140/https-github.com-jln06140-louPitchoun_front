import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/Utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Injectable()
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private Utilisateurs: Utilisateur[];

  get isLoggedin() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router,
              private utilisateurService: UtilisateurService
  ) { }

  login(utilisateur: any) {
    this.utilisateurService.getUtilisateurByUsernameAndPassword(utilisateur.userName,utilisateur.password).subscribe(
      (data) =>{
        localStorage.setItem('utilisateur', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      },
      (error) =>{
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
}
