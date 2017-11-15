import { Component, OnInit } from '@angular/core';
import {Compte} from "../compte/compte";
import {UserService} from "../services/user.service";
import {Response} from "@angular/http";
import 'rxjs/add/operator/map';

//import 'rxjs/operators/map';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  nom: string = 'toto';
  comptes: Compte[];
  updatedOwner: string ='';
  users:any; //  sinon obligation de créer une classe user avec un id, name etc...



  constructor(private userService : UserService) {

    this.comptes = [new Compte('1', 'toto'), new Compte('2', 'titi'), new Compte('3', 'tutu')]

  }

  ngOnInit() {
  }

  showOwner(owner){

    //this.userService.getUsers().then(  data => this.users = data);

    //(data=> this.users = data.json());

    // subscribe(response:Response){
    //       response = console.log(response.json());
    //       error =>console.log(error;
    //   }

    this.updatedOwner = owner + '';
  }

}
