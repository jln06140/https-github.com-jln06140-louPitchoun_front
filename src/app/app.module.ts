import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTableModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatSelectModule, MatSnackBarModule, MatDialogModule} from '@angular/material';
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
import { EmployeService } from './services/employe.service';
import { EnfantService } from './services/enfant.service';
import { ListeEnfantsComponent } from './gestion/enfants/liste-enfants/liste-enfants.component';
import { AjoutEmployeComponent } from './gestion/utilisateur/ajout-utilisateur/ajout-employe/ajout-employe.component';
import { AjoutParentComponent } from './gestion/utilisateur/ajout-utilisateur/ajout-parent/ajout-parent.component';
import { ModifierEnfantComponent } from './gestion/enfants/modifier-enfant/modifier-enfant.component';
import { DialogBodyComponent } from './dialog/dialog-body/dialog-body.component';
import { PopupAssociateEnfantComponent } from './gestion/utilisateur/list-utilisateur/popup-associate-enfant/popup-associate-enfant.component';
import { EmployeViewComponent } from './dashboard-view/employe-view/employe-view.component';
import { ParentViewComponent } from './dashboard-view/parent-view/parent-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SectionViewComponent } from './section-view/section-view.component';
import { JourneeServiceService } from './services/journee-service.service';
import { DatePipe } from '@angular/common';
import { DialogActiviteComponent } from './dialog/dialog-activite/dialog-activite.component';
import { PopupActiviteComponent } from './section-view/popup-activite/popup-activite.component';
import { ActiviteComponent } from './section-view/popup-activite/activite/activite.component';
import { TypeActiviteService } from './services/type-activite.service';
import { ActiviteService } from './services/activite.service';
import { SnackBarService } from './services/snack-bar.service';
import { SiesteComponent } from './section-view/popup-activite/sieste/sieste.component';
import { SiesteService } from './services/sieste.service';
import { RepasComponent } from './section-view/popup-activite/repas/repas.component';
import { RepasService } from './services/repas.service';
import { PopupResumeComponent } from './section-view/popup-resume/popup-resume.component';
import { PopupInfoComponent } from './section-view/popup-info/popup-info.component';
import { EnfantJourneeComponent } from './dashboard-view/parent-view/enfant-journee/enfant-journee.component';
import { IndexComponent } from './index/index.component';





const appRoutes: Routes = [
  { path: '', component: DashboardViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'gestion',
    component: GestionComponent,
    children : [
      { path : 'utilisateur', component: AjoutUtilisateurComponent},
      { path : 'listeUtilisateur', component: ListUtilisateurComponent},
      { path : 'listeUtilisateur/:id', component: ModifierUtilisateurComponent},
      { path : 'enfant', component: AjoutEnfantComponent},
      { path : 'listeEnfants/:id', component: ModifierEnfantComponent},
      { path : 'listeEnfants', component: ListeEnfantsComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    canActivate: [AuthGuard],
    children : [
     
    ]
  },
  { path : 'journeeEnfant/:id', component : EnfantJourneeComponent},
  { path : 'section', component: SectionViewComponent}

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
    FormModParentComponent,
    ListeEnfantsComponent,
    AjoutEmployeComponent,
    AjoutParentComponent,
    ModifierEnfantComponent,
    DialogBodyComponent,
    PopupAssociateEnfantComponent,
    EmployeViewComponent,
    ParentViewComponent,
    DashboardViewComponent,
    SectionViewComponent,
    DialogActiviteComponent,
    PopupActiviteComponent,
    ActiviteComponent,
    SiesteComponent,
    RepasComponent,
    PopupResumeComponent,
    PopupInfoComponent,
    EnfantJourneeComponent,
    IndexComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
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
    MatTableModule ,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [AuthService,
              UtilisateurService,
              ParentService,
              EmployeService,
              EnfantService,
              ProfilService,
              JourneeServiceService,
              InformationService,
              TypeActiviteService,
              SiesteService,
              ActiviteService,
              RepasService,
              SnackBarService,
              AuthGuard,
              DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent,
                    PopupAssociateEnfantComponent,
                    PopupResumeComponent,
                    PopupInfoComponent,
                    PopupActiviteComponent ]

})
export class AppModule { }
