import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajout-enfant',
  templateUrl: './ajout-enfant.component.html',
  styleUrls: ['./ajout-enfant.component.css']
})
export class AjoutEnfantComponent implements OnInit {

  EnfantForm: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  }

  initForm(){
    this.EnfantForm = this.formBuilder.group({
    enfantInfo:this.formBuilder.group({
      nom: '',
      prenom: '',
      dateDeNaissance: '',
      allergie: '',
      maladie: '',
      biberon: ''
    }),
    parents: this.formBuilder.array([new FormControl])
    })
  }

  onSubmit(){

  }

}
