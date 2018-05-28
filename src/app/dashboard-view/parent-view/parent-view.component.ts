import { Component, OnInit, Input } from '@angular/core';
import { EnfantService } from '../../services/enfant.service';
import { Parent } from '../../model/parent';
import { Enfant } from '../../model/enfant';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {

  @Input()
  parent: Parent;
  enfants: Enfant[];
  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.enfantService.getEnfantsParent(this.parent.id).subscribe(
      (data) => {
        this.enfants = data;
        console.log(this.enfants);
        console.log(this.parent);
        // trie la liste d'enfants selon la section de l'employe
        //this.enfants = this.enfants.filter( enfant => enfant.section === 'PETIT' );
      }
    )
  }

}
