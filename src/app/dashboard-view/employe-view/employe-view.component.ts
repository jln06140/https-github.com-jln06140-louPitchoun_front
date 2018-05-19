import { Component, OnInit, Input } from '@angular/core';
import { EnfantService } from '../../services/enfant.service';
import { Enfant } from '../../model/enfant';

@Component({
  selector: 'app-employe-view',
  templateUrl: './employe-view.component.html',
  styleUrls: ['./employe-view.component.css']
})
export class EmployeViewComponent implements OnInit {

  // recuperation dans le component de la section de l'employe
  @Input()
  section:string;
  enfants: Enfant[];

  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.enfantService.getAllEnfants().subscribe(
      (data) => {
        this.enfants =data;
        // trie la liste d'enfants selon la section de l'employe
        this.enfants = this.enfants.filter( enfant => enfant.section === 'PETIT' );
      }
    )
  }

}
