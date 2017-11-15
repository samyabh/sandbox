import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

export const routes:Routes = [
        {path:'', redirectTo :'', pathMatch:'full'},
        {path:'loginComponent', component :LoginComponent, pathMatch:'full'},
        {path:'login',  redirectTo :'loginComponent', pathMatch:'full'},
        {path:'sign-up', component :SignupComponent}
];
