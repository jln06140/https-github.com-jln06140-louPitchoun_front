import { Component, OnInit, Input } from '@angular/core';
import { Enfant } from '../../../model/enfant';
import { JourneeServiceService } from '../../../services/journee-service.service';
import { JourneeEnfant } from '../../../model/journeeEnfant';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  @Input()
  journee: any;
  journeeEncours : JourneeEnfant;
  activite : any = {
    remarque: '',
    typeActivite: 1

  };


  constructor(private journeeService : JourneeServiceService) { }

  ngOnInit() {
    //retourner la journee de l'enfant en cours
  }

  submit(f) {
    this.journee.activites.push(this.activite);
    this.journeeService.updateJourneeEncours(this.journee.id, this.journee).subscribe(
      //ok -> revenir au dialog box et notifier activite ajoutée
      //erreur -> rester dans le composant
      (data) =>{console.log(data);}
    );
    console.log(this.journee);
    console.log(f.value);
  }

}
