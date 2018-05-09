import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from '../../../../tools/custom-validators';
import { Utilisateur } from '../../../../model/Utilisateur';
import { UtilisateurService } from '../../../../services/utilisateur.service';
import { Parent } from '../../../../model/parent';

@Component({
  selector: 'app-form-mod-parent',
  templateUrl: './form-mod-parent.component.html',
  styleUrls: ['./form-mod-parent.component.css']
})
export class FormModParentComponent implements OnInit {

  @Input()
  parent: Utilisateur;
  lecture: boolean;
  ParentUpdated: Parent;

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
    this.ParentUpdated = new Parent();
    this.ParentUpdated.infoUserDto = this.parentModForm.value['infoUserDto'];

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

  getInfo() {
    return this.parent.infoUserDto;
  }

  get parenst() {
    return this.parent;
  }

  onSubmitForm(form: NgForm) {
    Parent ParentToUpdate = new Parent(

    )
       console.log(JSON.stringify(form.value));
  }

}
