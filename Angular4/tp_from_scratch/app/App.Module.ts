import {NgModule} from '@angular/core'
import {Sofrecom} from './SofrecomComp.component'
import {BrowserModule} from '@angular/platform-browser'
//import '@types/core-js';


@NgModule({
    imports:[BrowserModule],
    declarations:[Sofrecom],
    providers:[],
    bootstrap: [Sofrecom]
})

export class AppModule{


}