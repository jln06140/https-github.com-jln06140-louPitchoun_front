import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SiesteService } from '../../../services/sieste.service';
import { SnackBarService } from '../../../services/snack-bar.service';

@Component({
  selector: 'app-sieste',
  templateUrl: './sieste.component.html',
  styleUrls: ['./sieste.component.css']
})
export class SiesteComponent implements OnInit {

  @Input()
  journee;

  @Output()
  afficheComponent = new EventEmitter<boolean>();

  sieste: any = {
    heureDebut: '',
    heureFin:'',
    remarque: '' 

  };

  constructor(private siesteService: SiesteService,
              private snackBarService: SnackBarService) { }

  ngOnInit() {
  }

  submit(f){
    this.siesteService.ajouterSieste(this.journee.id, this.sieste).subscribe(
      (data) => this.afficheComponent.emit(false)
    )
  }

  

}
