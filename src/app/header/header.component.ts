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
  quelProfil$: Observable<any>;
  
  profil: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedin;
    this.quelProfil$ = this.authService.quelProfil;
    console.log("profil observable " + JSON.stringify(this.quelProfil$);
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.profil = utilisateur.profil;
    console.log(this.profil);
  }
  
  onLogout() {
    this.authService.logout();

    const margin = $('header').css('margin-left');
    $('.menu-mob').unbind().on('click', function (e) {
      e.preventDefault();
      $(this).parents('header').css('left', margin);
      $(this).parents('header').toggleClass('nav-active');
      if ($(this).parents('header').hasClass('nav-active')){
        $(this).parents('header').find('nav').css({ "opacity": "0", "display": "block" }).stop().animate({ "opacity": "1", "left": '0' });
      }
      else {
        $(this).parents('header').find('nav').stop().animate({ "left": '100%', "opacity": "0" }, function () {
          $(this).parents('header').find('nav').css({ "display": "none" });
        });
      }
    });
  }

  
}
