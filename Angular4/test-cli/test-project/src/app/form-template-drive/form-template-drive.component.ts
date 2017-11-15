import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-drive.component.html',
  styleUrls: ['./form-template-drive.component.css']
})
export class FormTemplateDriveComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  login(form : FormGroup){
    console.log(form);
     console.log('prenom '  + form.controls.prenom.value );
    // console.log('nom '  + form.get('nom').value );
    // console.log('email '  + form.get('email').value );
  }

}
