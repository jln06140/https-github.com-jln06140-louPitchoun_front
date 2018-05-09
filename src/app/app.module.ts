import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTableModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth/auth.guard';
import { UtilisateurService } from './services/utilisateur.service';
import { HomeEmployeComponent } from './home-employe/home-employe.component';
import { AjoutUtilisateurComponent } from './gestion/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { ProfilService } from './services/profil.service';
import { InformationService } from './services/information.service';
import { ListUtilisateurComponent } from './gestion/utilisateur/list-utilisateur/list-utilisateur.component';
import { AjoutEnfantComponent } from './gestion/enfants/ajout-enfant/ajout-enfant.component';
import { ModifierUtilisateurComponent } from './gestion/utilisateur/modifier-utilisateur/modifier-utilisateur.component';
import { FormModEmpComponent } from './gestion/utilisateur/modifier-utilisateur/form-mod-emp/form-mod-emp.component';
import { FormModParentComponent } from './gestion/utilisateur/modifier-utilisateur/form-mod-parent/form-mod-parent.component';
import { ParentService } from './services/parent.service';



const appRoutes: Routes = [
  // { path: '', component: HomeEmployeComponent}, //canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  {
    path: 'gestion',
    component: GestionComponent,
    children : [
      { path : 'utilisateur', component: AjoutUtilisateurComponent},
      { path : 'listeUtilisateur', component: ListUtilisateurComponent},
      { path : 'listeUtilisateur/:id', component: ModifierUtilisateurComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    LoginComponent,
    HeaderComponent,
    HomeEmployeComponent,
    AjoutUtilisateurComponent,
    ListUtilisateurComponent,
    AjoutEnfantComponent,
    ModifierUtilisateurComponent,
    FormModEmpComponent,
    FormModParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [AuthService,
              UtilisateurService,
              ParentService,
              ProfilService,
              InformationService,
              AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
