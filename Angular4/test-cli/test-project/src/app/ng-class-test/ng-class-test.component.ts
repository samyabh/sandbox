import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-test',
  templateUrl: './ng-class-test.component.html',
  styleUrls: ['./ng-class-test.component.css']
})
export class NgClassTestComponent implements OnInit {

  classActivated: boolean = false;
  // To be finished
  //styleVariable = 'color:red;';
  constructor() { }

  ngOnInit() {
  }

}
