import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {IUsersService} from "./users.interface";
import {User} from "./user";
import {Status} from "./user";

@Injectable()
export class UserService implements IUsersService{

  constructor(private http: Http) { }

    /**
     * Lisibilité du code
     *
     * --> ajout de Observable
     * @returns {Observable}
     */
    // getUsers() : Observable <Response> {
    //     return this.http.get('https://jsonplaceholder.typicode.com/users').map(data => data = data.json());
    // };


    getUsers(): Promise<User[]> {

           return this.http.get('https://jsonplaceholder.typicode.com/users')
                .map(data => data = data.json())
                .map(data => {
                    let users:User[] = [];
                    for(let iter of data){
                        users.push(new User(iter.email, 'password', iter.id, iter.name, iter.constructor, Status.online));
                    }
                    return users;
                })
                .toPromise();

            /**let users = User[];
             users.push(new User(data.id, data.name, data.constructor, data.true));
             return users;**/
    }

    create(user: User): Promise<User> {
        return null;
    }

    exists(email: string): Promise<boolean> {
        return null;
    }

    get(email: string): Promise<User> {
        return null;
    }
}
