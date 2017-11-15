import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildTestSonComponent} from "../view-child-test-son/view-child-test-son.component";

@Component({
  selector: 'app-view-child-test',
  templateUrl: './view-child-test.component.html',
  styleUrls: ['./view-child-test.component.css']
})
export class ViewChildTestComponent implements OnInit {

  @ViewChild(ViewChildTestSonComponent) valueGetted : ViewChildTestSonComponent;

    ValueToGive:number = 10;
  constructor() { }

  ngOnInit() {
      this.valueGetted.blablabla();
  }



}
