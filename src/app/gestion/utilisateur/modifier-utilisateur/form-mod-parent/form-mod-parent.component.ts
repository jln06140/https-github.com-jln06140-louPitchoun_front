import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from '../../../../tools/custom-validators';
import { Utilisateur } from '../../../../model/Utilisateur';
import { UtilisateurService } from '../../../../services/utilisateur.service';
import { Parent } from '../../../../model/parent';
import { ParentService } from '../../../../services/parent.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-mod-parent',
  templateUrl: './form-mod-parent.component.html',
  styleUrls: ['./form-mod-parent.component.css']
})
export class FormModParentComponent implements OnInit {

  @Input()
  parent: Utilisateur;
  lecture: boolean;
 
  parentToUpdate: Parent;
  id: number;
  motDePasse: any   ;
  confirmation: string;


  parentModForm: NgForm;

  constructor(private formBuilder: FormBuilder,
              private parentService: ParentService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.lecture = true;
    this.UtilisateurToParent();
    
  }


  onModification() {
    this.lecture = this.lecture === true ? false : true;
  }

  getInfo() {
    return this.parent.infoUserDto;
  }

  UtilisateurToParent() {
    this.id = +this.route.snapshot.paramMap.get('id');
    return this.parentService.getParent(this.id).subscribe(
      data => this.parentToUpdate = data
    );
  }

  onSubmitForm(form: NgForm) {
    if(form.valid){
      if(this.motDePasse != null){
        this.parentToUpdate.motDePasse = this.motDePasse;
      }
      console.log(JSON.stringify(form.value));
      this.parentService.updateParent(this.parentToUpdate.id,this.parentToUpdate).subscribe(
        data => this.router.navigate(['../'])
      );
    }
  
       
  }

}
