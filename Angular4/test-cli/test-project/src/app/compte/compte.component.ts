import {Input, Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Compte} from './compte'

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit, OnChanges {

  @Input() compte:Compte;
  @Input() owner:string;
  constructor() { }

  @Output() childEvent = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes !');
    console.log(changes)
  }

  sendMessage(){
      this.childEvent.emit( 'Numéro de compte:"' + this.compte.numCompte + '" Détenu par: "' + this.compte.owner + '"');
  }

}
