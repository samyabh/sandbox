import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-test-son',
  templateUrl: './view-child-test-son.component.html',
  styleUrls: ['./view-child-test-son.component.css']
})
export class ViewChildTestSonComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  blablabla(){
    console.log('It works ! ');
  }
}
