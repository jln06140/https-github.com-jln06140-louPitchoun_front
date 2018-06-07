import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { ProfilService } from "./services/profil.service";
import { AuthService } from "./auth/auth.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLogged: any;

  title = "app";

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedin;
    this.isLoggedIn$.subscribe(data => {
      this.isLogged = data;
    });
  }
}
