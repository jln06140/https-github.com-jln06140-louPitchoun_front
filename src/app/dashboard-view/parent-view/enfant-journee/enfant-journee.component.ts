import { Component, OnInit } from '@angular/core';
import { JourneeServiceService } from '../../../services/journee-service.service';
import { JourneeEnfant } from '../../../model/journeeEnfant';
import { ActivatedRoute } from '@angular/router';
import { EnfantService } from '../../../services/enfant.service';
import { Enfant } from '../../../model/enfant';
import { ParentService } from '../../../services/parent.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-enfant-journee',
  templateUrl: './enfant-journee.component.html',
  styleUrls: ['./enfant-journee.component.css']
})
export class EnfantJourneeComponent implements OnInit {

  enfantSelected: Enfant;
  journeeEnCours: JourneeEnfant;
  id: number;
  msgErreur: string
  estParent: boolean = false;

  constructor(private journeeService: JourneeServiceService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private enfantService: EnfantService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.enfantService.getEnfant(this.id).subscribe(
      data => {
        this.enfantSelected = data;
        this.isParent(this.enfantSelected.id);
        this.journeeService.getJourneeDuJour(this.id).subscribe(
          data => {
            this.journeeEnCours = data;
          }
        )
      });
  }

  //verifie si enfant a un lien avec le parent
  isParent(enfantId: any) {
    console.log(enfantId);
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    const id = utilisateur.id;
    let enfantsDuParent: Enfant[];
    this.enfantService.getEnfantsParent(id).subscribe((
      data => {
        enfantsDuParent = data;
        console.log(enfantsDuParent);
        if (enfantsDuParent.find(x => x.id === enfantId)) {
          this.estParent = true;
        }
      }
    ))
  }
}
