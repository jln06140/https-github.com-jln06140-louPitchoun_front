import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CustomValidators } from '../../../../tools/custom-validators';
import { Utilisateur } from '../../../../model/Utilisateur';
import { Employe } from '../../../../model/employe';
import { UtilisateurService } from '../../../../services/utilisateur.service';

@Component({
  selector: 'app-form-mod-emp',
  templateUrl: './form-mod-emp.component.html',
  styleUrls: ['./form-mod-emp.component.css']
})
export class FormModEmpComponent implements OnInit {

  @Input()
  employe: Utilisateur;
  myForm: FormGroup;
  lecture: boolean;
  ParentUpdated: Employe;

  parentModForm: NgForm;

  constructor(private formBuilder: FormBuilder,
              private utilisateurService: UtilisateurService
  ) { }

  ngOnInit() {
    this.lecture = true;
    this.cloneParent();
    //this.initFormParent();
    //this.getInfo();
   // this.setForm();
  }

  cloneParent() {
    this.ParentUpdated = new Employe();
    //this.ParentUpdated.infoUserDto = this.parentModForm.value['infoUserDto'];

  }

  // initFormParent() {
  //   this.parentModForm = this.formBuilder.group({
  //     motDePasse: ['', Validators.required],
  //     confMdp: ['', Validators.required],
  //     infoUserDto : this.formBuilder.group({
  //       email: '',
  //       nom: '',
  //       prenom: '',
  //       adresse: '',
  //       ville: '',
  //       telMobile: ['', [Validators.required, Validators.pattern('0[1-68]([-. ]?[0-9]{2}){4}')]],
  //       telFixe: '',
  //       telPro: '',
  //     },
  //     { validator: CustomValidators.childrenEqual}),
  //   });
  // }

  // initFormParent() {
  //   this.parentModForm = new FormGroup({
  //     motDePasse: new FormControl(),
  //     confMdp: new FormControl(),
  //     infoUserDto : new FormGroup({
  //       email: new FormControl(),
  //       nom: new FormControl(),
  //       prenom: new FormControl(),
  //       adresse: new FormControl(),
  //       ville: new FormControl(),
  //       telMobile: new FormControl(),
  //       telFixe: new FormControl(),
  //       telPro: new FormControl(),
  //     }),
  //   });
  // }

  setForm() {
    this.parentModForm.controls['nom'].setValue(this.parenst.motDePasse);

  }

  onModification() {
    this.lecture = this.lecture === true ? false : true;
  }

 

  onSubmitForm(form: NgForm) {
    // Parent ParentToUpdate = new Parent(

    // )
       console.log(JSON.stringify(form.value));
  }

}
