import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

    })
  }

}
