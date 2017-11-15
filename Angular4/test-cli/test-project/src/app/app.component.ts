import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {User} from "./services/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-ang-4';
  users : User[];

  constructor(private userService : UserService){

  }

  ngOnInit(){
    this.userService.getUsers().then(users =>{
      this.users = users;
    });
  }
}
