import {UserCredential} from "./user-credential";

export const Status: {[K in string]: K} = {
    online: "online",
    offline: "offline",
    busy: "busy"
};

export type Status = keyof typeof Status;

export class User extends UserCredential {

    id: number;
    firstName: string;
    lastName: string;
    status: Status;

    constructor(email: string, password:string, id: number, firstName: string, lastName: string, status: Status) {
        super(email, password);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
    }
    
}