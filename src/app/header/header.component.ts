import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  value = false;
  profil: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    this.profil = sessionStorage.getItem('profil');
    this.isLoggedIn$ = this.authService.isLoggedin;
    setTimeout(() => {
      this.menuJquery();
    }, 0);
  }

  onLogout() {
    this.authService.logout();
  }

  menuJquery() {
    $('.nav-opener')
      .unbind()
      .on('click', function(e) {
        e.preventDefault();
        $(this)
          .parent('nav')
          .toggleClass('nav-active');
        if (
          $(this)
            .parent('nav')
            .hasClass('nav-active')
        ) {
          $(this)
            .parent('nav')
            .find('.menu')
            .css({ height: '100%' })
            .stop()
            .animate({ left: '0' });
        } else {
          $(this)
            .parent('nav')
            .find('.menu')
            .stop()
            .animate({ left: '-100%' }, function() {
              $(this)
                .parent('nav')
                .find('.menu')
                .css({ height: '0' });
            });
        }
      });
    $('.sousCatg').on('click', function(e) {
      $(this)
        .find('ul')
        .toggleClass('opened');
    });
    $('.panel-title').on('click', function() {
      $(this)
        .parent()
        .toggleClass('open');
    });
    $('.menu li a').on('click', function(e) {
      $('nav.nav-active')
            .find('.menu')
            .stop()
            .animate({ left: '-100%' }, function() {
              $('nav.nav-active')
                .find('.menu')
                .css({ height: '0' });
            });
      $('nav.nav-active').removeClass('nav-active');
    });
    $('body').on('click', function(e) {
      if ($(e.target).is('.sousCatg')) {
        e.preventDefault();
        return;
      }
      if ($('.menu').find('ul.opened').length > 0) {
        $('.menu')
          .find('ul.opened')
          .removeClass('opened');
      }
    });
  }
}
