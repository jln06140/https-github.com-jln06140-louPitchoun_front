import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTableModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { GestionComponent } from './gestion/gestion.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifEmployeComponent } from './modif-employe/modif-employe.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth/auth.guard';
import { UtilisateurService } from './services/utilisateur.service';
import { HomeEmployeComponent } from './home-employe/home-employe.component';
import { AjoutUtilisateurComponent } from './gestion/utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { ProfilService } from './services/profil.service';
import { InformationService } from './services/information.service';


const appRoutes: Routes = [
  // { path: '', component: HomeEmployeComponent}, //canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
=======
import { CreationEmployeComponent } from './creation-employe/creation-employe.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SectionDashComponent } from './section-dash/section-dash.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '/dashboard', component: DashboardViewComponent},
>>>>>>> 9a4b6d5d13fade2bfb160e769769151e5e1d17b3
  {
    path: 'gestion',
    component: GestionComponent,
    children : [
<<<<<<< HEAD
      { path : 'utilisateur', component: AjoutUtilisateurComponent},
=======
      { path : 'employe', component: EmployeListComponent},
>>>>>>> 9a4b6d5d13fade2bfb160e769769151e5e1d17b3
      { path : 'employe/{id}', component: ModifEmployeComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    EmployeListComponent,
    ModifEmployeComponent,
<<<<<<< HEAD
    LoginComponent,
    HeaderComponent,
    HomeEmployeComponent,
    AjoutUtilisateurComponent
=======
    CreationEmployeComponent,
    DashboardViewComponent,
    SectionDashComponent
>>>>>>> 9a4b6d5d13fade2bfb160e769769151e5e1d17b3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
              ProfilService,
              InformationService,
              AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
