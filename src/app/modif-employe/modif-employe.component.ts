import { Component, OnInit } from '@angular/core';
import { Employe } from '../model/employe';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-modif-employe',
  templateUrl: './modif-employe.component.html',
  styleUrls: ['./modif-employe.component.css']
})
export class ModifEmployeComponent implements OnInit {

  employe: Employe;
  employeForm: FormGroup;


  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.get('id');
    this.utilisateurService.getEmploye(id).subscribe(
      data => this.employe = data
    );
  }

}
