/**
 *
 *
 * NOT WELL IMPLEMENTED
 *
 *
 */


import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactiv-form-module',
  templateUrl: './reactiv-form-module.component.html',
  styleUrls: ['./reactiv-form-module.component.css']
})
export class ReactivFormModuleComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // associer le form en tamplate
      // --> <form [formGroup] = "myForm" (submit)="login()">
      // pas de passage en paramètre de myForm côté template
    // mapper les inpot avec <input formControlName)"password">
      this.myForm = fb.group({
          prenom:   new FormControl('', Validators.minLength(4))
        }
      );
  }

  ngOnInit() {
  }

  login(){
      console.log(this.myForm);
      console.log('Is form valid ?' + this.myForm.valid)
  }
}
