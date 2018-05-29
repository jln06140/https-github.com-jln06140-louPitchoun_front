import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>; 
  
  profil: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.profil = sessionStorage.getItem('profil');
    this.isLoggedIn$ = this.authService.isLoggedin;
  }
  
  onLogout() {
    this.authService.logout();
  }

  
}
