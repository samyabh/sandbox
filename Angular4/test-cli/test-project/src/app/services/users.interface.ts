import {User} from "./user";

export interface IUsersService {
    getUsers(): Promise<User[]>;
    create(user: User): Promise<User>;
    exists(email: string): Promise<boolean>;
    get(email: string): Promise<User>;
}
