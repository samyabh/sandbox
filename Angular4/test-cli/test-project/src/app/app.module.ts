import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PersonneComponent } from './personne/personne.component';
import { CompteComponent } from './compte/compte.component';
import { ComptePipe } from './compte/compte.pipe';
import { ChronoComponent } from './chrono/chrono.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material';

import {HttpModule} from "@angular/http";
import {UserService} from './services/user.service';
import { UserTableComponent } from './user-table/user-table.component';

import {MatTableModule} from '@angular/material';
import { FormTemplateDriveComponent } from './form-template-drive/form-template-drive.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactivFormModuleComponent } from './reactiv-form-module/reactiv-form-module.component';
import { routes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewChildTestComponent } from './view-child-test/view-child-test.component';
import { ViewChildTestSonComponent } from './view-child-test-son/view-child-test-son.component';
import { HostBindListenerDirective } from './test-directives/host-bind-listener.directive';
import { TestDirectivesComponent } from './test-directives/test-directives.component';
import { ImmeubleComponent } from './immeuble/immeuble.component';
import { ImmutabilitetestComponent } from './immutabilitetest/immutabilitetest.component';
import { NgClassTestComponent } from './ng-class-test/ng-class-test.component';
import { ComponentToBeTestedComponent } from './component-to-be-tested/component-to-be-tested.component';



@NgModule({
  declarations: [
    AppComponent,
    MedecinComponent,
    PersonneComponent,
    CompteComponent,
    ComptePipe,
    ChronoComponent,
    UserTableComponent,
    FormTemplateDriveComponent,
    ReactivFormModuleComponent,
    SignupComponent,
    LoginComponent,
    ViewChildTestComponent,
    ViewChildTestSonComponent,
    HostBindListenerDirective,
    TestDirectivesComponent,
    ImmeubleComponent,
    ImmutabilitetestComponent,
    NgClassTestComponent,
    ComponentToBeTestedComponent
  ],
  imports: [
      HttpModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forRoot(routes),

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
