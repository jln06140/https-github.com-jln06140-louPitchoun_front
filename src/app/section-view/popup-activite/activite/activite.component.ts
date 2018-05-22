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
  enfant: Enfant;
  journeeEncours : JourneeEnfant;
  activite : any = {
    remarque: '',
    nomActivite: 1

  };


  constructor(private journeeService : JourneeServiceService) { }

  ngOnInit() {
    //retourner la journee de l'enfant en cours
  }

  submit(f) {
    console.log(f.value);
  }

}
