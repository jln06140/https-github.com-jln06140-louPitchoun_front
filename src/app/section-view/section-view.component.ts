import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../services/enfant.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { Enfant } from '../model/enfant';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { JourneeServiceService } from '../services/journee-service.service';
import { DatePipe } from '@angular/common';
import { JourneeEnfant } from '../model/journeeEnfant';
import { PopupActiviteComponent } from './popup-activite/popup-activite.component';
import { PopupResumeComponent } from './popup-resume/popup-resume.component';
import { PopupInfoComponent } from './popup-info/popup-info.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.css']
})
export class SectionViewComponent implements OnInit {

  // journeeEnCours: any;
  erreur: string;
  now: any;
  dateTest = new Date();
  enfants: Enfant[];


  displayedColumns = ['danger', 'nom', 'prenom', 'heure arrivee', 'heure depart', 'action', 'Renseignements'];
  dataSource = new MatTableDataSource();

  constructor(private enfantService: EnfantService,
    private journeeService: JourneeServiceService,
    private datePipe: DatePipe,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loadEnfantsSection();
    this.now = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.now);
  }

  debuterJournee(idEnfant: number) {
    this.journeeService.debuterJournee(idEnfant).subscribe(
      (data) => {
        console.log(data);
        this.loadEnfantsSection();
      }
    );
  }

  cloturerJournee(idEnfant: number) {
    this.journeeService.cloturerJournee(idEnfant).subscribe(
      (data) => {
        console.log('cloture' + data);
        this.loadEnfantsSection();
      }
    );
  }

  // cloturerJournee(idEnfant: number){
  //   this.journeeService.cloturerJournee(idEnfant).subscribe(

  //   );
  // }

  loadEnfantsSection() {
    this.enfantService.getAllEnfants().subscribe(
      data => {
      this.enfants = data;
        this.enfants = this.enfants.filter(enfant => enfant.section === this.authService.utilisateurLogged.section);
        this.dataSource.data = this.enfants;
      }
    );
  }

  // renseigne si il ya journee en cours
  journeeEnCours(element: Enfant): boolean {
    let isPresent = false;
    const today = Date.now();
    if (element.journees.length > 0) {
      for (const journee of element.journees) {
        if (journee.journeeEnCours) {
          isPresent = true;
        }
      }
    }
    console.log(isPresent);
    return isPresent;
  }

  getJourneeDuJour(element: Enfant): JourneeEnfant {
    if (element.journees.length > 0) {
      for (const journee of element.journees) {
        if (journee.date === this.now) {
          return journee;
        }
      }
    }
    return null;
  }

  isJourneeDuJourTerminee(element: Enfant): boolean {
    if (element.journees.length > 0) {
      for (const journee of element.journees) {
        if (journee.date === this.now && !journee.journeeEnCours) {
          return true;
        }
      }
    }
    return false;
  }

  indiceJourneeEnCours(element: Enfant): number {
    let indice = -1;
    for (let i = 0; i < element.journees.length; i++) {
      if (element.journees[i].journeeEnCours === true) {
        indice = i;
      }
    }
    if (indice === -1) {
      this.erreur = 'Aucune journee en cours';
    }
    return indice;
  }

  getJourneeEnCours(element: Enfant) {
    const indice = this.indiceJourneeEnCours(element);
    if (indice >= 0) {
      console.log(indice);
      return element.journees[indice];
    }
    if (indice === -1) {
      this.erreur = 'Aucune journee en cours';
    }
  }

  getHeureArrivee(element: Enfant) {
    const heureArr = this.getJourneeDuJour(element).heureArrivee.substring(0, 5);
    return heureArr;
  }

  getHeureDepart(element: Enfant) {
    const heureDep = this.getJourneeDuJour(element).heureDepart.substring(0, 5);
    return heureDep;
  }

  openDialog(element: any): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupActiviteComponent,
      {
        width: '600px',
        data: {
          /*put your data here*/
          enfant: element,
          journee: this.getJourneeDuJour(element)
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEnfantsSection();

    });

  }

  openDialogResume(element: any): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupResumeComponent,
      {
        width: '600px',
        data: {
          /*put your data here*/
          enfant: element,
          journee: this.getJourneeDuJour(element)
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEnfantsSection();

    });
  }

  openDialogInfo(element: any): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(PopupInfoComponent,
      {
        width: '600px',
        data: {
          /*put your data here*/
          enfant: element,
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.loadEnfantsSection();

    });


  }



  // journeeFinie()
}

  // getJournee(element: Enfant){
  //   if (element.journees.)
  // }







