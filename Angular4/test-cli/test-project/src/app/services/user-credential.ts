export class UserCredential {
    protected email: string;
    protected password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}