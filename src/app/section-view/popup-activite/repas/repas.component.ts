import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RepasService } from '../../../services/repas.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  @Input()
  journee;

  @Output()
  afficheComponent = new EventEmitter<boolean>();

  biberon:any;

  repas: any = {
    heureDebut: '',
    quantite:'',
    menu: '',
    remarque: ''
  };
  
  constructor(private repasService : RepasService) { }

  ngOnInit() {
  }

  submit(f){
    this.repasService.ajoutRepasDansJournee(this.journee.id, this.repas).subscribe(
      (data) => this.afficheComponent.emit(false)
    )
  }

}
