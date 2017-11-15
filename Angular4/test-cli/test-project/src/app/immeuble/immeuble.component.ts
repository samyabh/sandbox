import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app-immeuble',
  templateUrl: './immeuble.component.html',
  styleUrls: ['./immeuble.component.css']
})
export class ImmeubleComponent implements OnInit {

  formControlText : FormControl;
  textValue : string;

  constructor() {
      this.formControlText = new FormControl();
  }

  ngOnInit() {

    this.formControlText.valueChanges.debounceTime(500).subscribe(text =>
    this.textValue = text);

  }



}
