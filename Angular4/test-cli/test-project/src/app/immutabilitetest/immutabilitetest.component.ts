import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as Immutable from 'immutable';
@Component({
  selector: 'app-immutabilitetest',
  templateUrl: './immutabilitetest.component.html',
  styleUrls: ['./immutabilitetest.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImmutabilitetestComponent implements OnInit {

  user:any = Immutable.Map({
      firstName: 'samy',
      lastName: 'abh'
  });
  constructor() { }

  ngOnInit() {

    this.user.lastName = 'toto'; // no changes

    this.user.merge(
        {firstName:'titi', lastName:'abh'}
    ); // do changes
  }

}
