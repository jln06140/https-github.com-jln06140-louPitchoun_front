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

  login(utilisateur: Utilisateur) {
    // recuperer et verifier utilisateur
    // comparer que email existe sinon erreur
    // sinon comparer email et mot de passe correspondent
    // if (utilisateur.login !== '' && utilisateur.motDePasse !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    // }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
