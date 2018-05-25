import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enfant } from '../../../model/enfant';
import { JourneeServiceService } from '../../../services/journee-service.service';
import { JourneeEnfant } from '../../../model/journeeEnfant';
import { TypeActiviteService } from '../../../services/type-activite.service';
import { ActiviteService } from '../../../services/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  @Input()
  journee: any;
  @Output()
  afficheComponent = new EventEmitter<boolean>();

  journeeEncours: JourneeEnfant;
  activite: any = {
    remarque: '',
    typeActivite: 1

  };


  constructor(private activiteService: ActiviteService,
    private typeActiviteService: TypeActiviteService) { }

  ngOnInit() {
    //retourner la journee de l'enfant en cours
  }

  submit(f) {
    this.typeActiviteService.getTypeActivite(this.activite.typeActivite).subscribe(
      (data) => {
        this.activite.typeActivite = data,
          this.activiteService.ajoutActiviteDansJournee(this.journee.id, this.activite).subscribe(
            //ok -> revenir au dialog box et notifier activite ajoutée
            (data) => {
              this.afficheComponent.emit(false);
            }
          );
      }
    );
  }

}
