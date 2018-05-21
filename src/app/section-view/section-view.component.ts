import { Component, OnInit } from '@angular/core';
import { EnfantService } from '../services/enfant.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { Enfant } from '../model/enfant';
import { MatTableDataSource } from '@angular/material';
import { JourneeServiceService } from '../services/journee-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.css']
})
export class SectionViewComponent implements OnInit {

  //journeeEnCours: any;
  erreur: string;
  now: any;

  displayedColumns = [ 'danger', 'nom', 'prenom', 'heure arrivee', 'heure depart', 'action'];
  dataSource = new MatTableDataSource();

  constructor(private enfantService: EnfantService,
              private journeeService: JourneeServiceService,
              private datePipe: DatePipe) { }

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

  // cloturerJournee(idEnfant: number){
  //   this.journeeService.cloturerJournee(idEnfant).subscribe(

  //   );
  // }

  loadEnfantsSection(){
    this.enfantService.getAllEnfants().subscribe(
      data => this.dataSource.data = data
    );
  }

  journeeEnCours(element : Enfant): boolean{
    let isPresent = false;
    const today = Date.now();
    if (element.journees.length > 0) {
      for (const journee of element.journees) {
        console.log((journee.date.toDateString ));
        //console.log(this.datePipe.transform(today, 'yyyy-MM-dd'));
        isPresent = true;
         }
     }
     console.log(isPresent);
     return isPresent;
    }

  indiceJourneeEnCours(element: Enfant): number {
    let indice = -1;
    for (let i = 0; i < element.journees.length; i++) {
      if (element.journees[i].journeeEnCours === true) {
        indice = i;
      }
    }
    if (indice === -1){
      this.erreur = 'Aucune journee en cours';
    }
    return indice;
  }

  getJourneeEnCours( element: Enfant) {
    const indice = this.indiceJourneeEnCours(element);
    if(indice >= 0) {
      console.log(indice);
      return element.journees[indice];
    }
    if (indice === -1) {
      this.erreur = 'Aucune journee en cours';
    }
  }

  journeeFinie()
}

  // getJournee(element: Enfant){
  //   if (element.journees.)
  // }






}


