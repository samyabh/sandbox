# Angular 

### ES6

 - Classes 

 	Utilisation de this, dépend du scope. (function, classses...) et possibilité de forcer le contexte de this : 
    - call permet de d'invoquer la fonction
 	- bind retourne une ref.
 	- apply, pareil que call avec un tableau d'arguments 
    - fonction fléchées 
    - Les fonctions fléchées font toujours références au contexte parent.
   
    - Chaines de caractères 
    Les backquotes ou backstick permettent d'afficher directement des variables et de faire du multilignes
    exemple : console.log(`Hello my name is ${name)`);
    
 - héritage ou alors pattern delegation (passer une instance à un constructeur ) sans faire de extends
 
 - portée des variables :
    - var à une portée function 
    - let au block : {} 
    - const au block mais non modifiable 
    
    - opérateurs de décomposition --> (...)
    
    
    A VOIR POUR CETTE PARTIE :
    - Match des éléments par des regex 
    
    L'ordre : let (...) = 'toto'
    la clé let {toto, titi] =  '...'
    
 - Typescript à beosin d'un transpilateur (code source vers du code source (pas compilateur))
## Typescript : 
    - Ajout de enum, any, void 
    - obligé de typer les éléments 
    - Ajout de any, parce qu'on ne connait pas forcément les types des librairies
    
   - extension .d.ts permet de mettre une surcouche qui reprends les variables de la lib avec leur type. 
        C'est un contrat qui permet de connaitre la signature des méthode pour que le typeScript puisse l'appeler
   - DefinetelyTyped  est un projet github qui recense les contrats de toutes les libs existantes (ou presque)
  - ? décrit un paramètre optionnel
    Possibilité de créer un type : 
          type str = string;
          let cheese: str = 'titi' 
          type Age = stirng | number;      
  - interface
  - typage générage <T> 
  - Les décorateurs
        Les annontations, meta-programmation
        Pas de décorateur sur constructeur
        Modifier le comportement par defaut de la propriété (pltôt le getter)
        
    Permet d'utiliser les décorators angular
    "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,      
    
### Angular

- Choix du TypeScript parce que compilateur

##### cycle de vie  

Clarifier les élémnents suivant : 

l'injecteur gère le cycle de vie.

##### bindings 

- [] uni directionnel 
$ permet de caster l'event

##### évenements / output
 
(childEvent)=handleChildEvent($event)

handleChildEvent(Message){
    console.log(message)
}

Child.event.emit('Clicked');

@Output() childEvent= new EventEmitter()

##### services 

Commuuication entre deux composants : Service

3 types de directives : 
- les composants
- structurelle :ngFor, NgIf, ggSwith
    affecte le dom
- directives attributes : changent l'apprence ou le comportmeent d'un élément (NgClass)
        - ngStyle
<div *ngFor="let cust of customers">
{{ cust.lastName }}, {{cst.firstName}}
</div>

*ngif="condition"

A voir pour la syntaxe exacte du switch mais ça ressemble : 
<ul [ngSSwitch]="perosn">

<Li NgSwitchCase="'toto'">toto</li>
<li NgSwitchDefault>Defaukt </li>

### angular-cli
ng new nom-projet ( a verif)
ng g c nom-composant
ng g class nom-class
ng g pipe nom-pipe

###Les pipes : 

ng generate pipe compte 


Pipe utile : "json" -> "| json"

#### Hooks

Ajout d'un comportement spécifique 
Les composants ont un cycle de vie.

Les hooks sont des évenements qu'ont peurt intercepter dans le cycle de vie

8 events possible 
les plus connu : ngOnInit, ngOnDestroy 

NgOnInit est utilie pour faire l'appel à un serveur
NgOnDestroy : à la destruction du composant 

Il faut implementer les interfaces quan don veut les utiliser 

- ngOnChange permet d'intercepter les changements lors d'inputs
- ngDoCheck permet de travailler après ngOnChange 
- ngAfterContentInit : Après que le contenu soit initialisé
- ngAfterContentChecked : rarement utilisé : Vérifier que les données de la templates soient bonnes avant qu'elles soit affichées'
        exemple : faire des notifications
- ngAfterViewInit : Avant que le contenu soit affichée
- ngAfterViewInit : Après 

### Injections de dépendances

@Injectable
-> Ajouter la classe au niveau de providers
Toujours passer par le constructeur
constructor(@Inject(RestApi) restApi) non obligatoire
constructor(restApi: RestApi) permet de le récupérer via le registre et le type

const injector = new Injector{[RestApi]=;
const restApi1 = injector.get(RestApi):

// Instanciation des classes au bootstrap



### Service

Partagé + injectable

@Injectable()
export class CustService{
    getCustomers(){
    return customers();
    }
/!\ Une seule instance par type de composant
/!\ Père et fils ont la même instance même si ce sont des composants différents

A vérifier : 
 Le fils ne partage pas le code "private" -> instances différentes 


### Observables 

- Map pour transformer 
- Filter pour filtrer
- Reduce pareil que reduce array ou presque

http.get(url).subscribe(
    response = console.log(response.json()));
    error =>console.log(error;
);

Lisibilité :
nom_funct: Observable 
Tout traitement des données se font dans le service 
------

private permet de rendre accessible la variable dans le comoosant (IDéclaration en passage de param constructeur) 


forRoot() dans  import[] Pour charger au besoin


Il est possible de "spécifier" le build pour établir des stratégies de build


Gestion de modules pour plusieurs projets 


Des modules qu'on importe avec npm, les versions doivent être bien clarifiées, seul l'architecte peut modifier le package.json
--> Voir pour les strats de build en détails

Build dev : `ng build --prod`
Build prod : `ng build --prod`  


Pas de documentation de build 

------

## Locales

<input type="text" #name>
créer une variable qui réference le DOM


## Formulaires

FormsModules (template-driven)
Toutes les verifications sont fait côté tempplates
-> crée le modèle dynamiquement depuis le html 
-> se base sur la balise form (comme AJS)

ReactiveFormsModule (Reactive)
Tout est géré côté controller

ng-valid; et ng-invalid
ng-pristine, ng-dirty...

Variables bool : valid et invalid, pristine, dirty,
submitted 

### 3 choses importes dans les formulaires 

<formControl> --> contrôle simple : 
    - valeur, statue, interactions, et event sur ce contrôle
  
  const control ) new FormControl();
  control.setValue('Nancy')
  .rese, . disabled ...  
  
  On peut grouper plusieurs formControl dans un FormGroup 
    même chose que AngularJS pour la validation globale : .valid... .dirty (a vérifier)etc
   
   FormArray un tableau de FormGroup et de FormControl
    
   Pour ajouter des controles nModel est obligatoire et doit être intérer
    
  directives :[FORM__DIRECTIVES],
  template :'<input type="text" [{ngModel}]
  
  les clés sont les noms (AJS)
  
  new Control('', Validators.minLength(4));
  pareil que new FormControl (...)

<input required type="text" ngControl="name" />    
<div [hidden]="name.dirty && !name.valid">
    <p [hidden] = "name.errors.minlength">
        blablablabla
    </p>
</div>

Si on se base sur la template ajouter novalide (pareil que AJS et pb sur comm'un panier)


#### Validator  personnalisés 
Deux façons e faire à voir en déttail


Pariel que AJS : possible de surcharger les classes css .ng-valid .ng-invalid etc....



###Les routes 

@angular-router

export const routes:Routes = {
    {path:'', redirectTo :'compnent-one' pathMatch:'full'],
     {path:'component-one', component: componentOne },
     ...
 ] 
]


Pareil que AJS avec des paramètres de matching 
export const routing = Routerodule.forRoot(routes);

<a [routerLink]=['/component-one']></a>
<a [routerLink]=['/component-two/;id', 'parameters']></a>


Affiche le composant équivalent à celui dans l'url :
<router-outlet></router-outlet>

Plusieurs router outlet = plusieurs noms


Récuparation du paramètre :
constructor(private route: ActivateRoute){]


private ngOnInit()'
    this.tab = this.route.params.subscribe(params => {
        this.id = params['id']
    })
    
 Pareil que AJS
 
 /!\ Version 5 va changer le module de routage
 
 Utilisation de "Gardien"
    - récupère l'url 
    - vérifie si l'utilisateur à accès à l'url 
    
Token d'auth -> localStorage

- utilisaton classique du protocole Auth
- Api classique : Gardin 
- Loading de conf : à implémenter pareil que AJS

- On peut placer toutes les routes dna sun fichier différent 
- Dans la définition des routes, on peut appeler à d'autres fichier de configuraitons de route tel que xxChild['path du fichier']


{
    path: '/toto'
    component: componentname
    canActivate:[AuthGuard],
    outlet: 'outline'
}

Traduction: utilisation du i18n de angular-cli 
Passage de clé - utilisation du localStorage 

#### Les composants avancés 


##### ViewCIld and ViewChilren
Accéder aux classes des composants fils
@ViewChild : 


@ViewChild(AlterComponent) alert: AlertComponent;
/!\ Va injecter le ocmposant fils avec cette variable 
Ne marche que pour un fils

@ViewChildren : 
Un tableau de ViewChild/alert ?

ReactivFormModuleComponent permet de récupérer le form du fills

@ViewChildre(T) rf : List<T>;

Soit avec T comme nom de l'enfant (Classe) ou alors le nom d'une variable de la template 



#### Projections (transclusions AJS)
Affiche des sous templates 
<composant-fils>
    <div {{compote-owner}}
</composant-fils>


Dans la vue de composant-fils
<ng-content></ng-content>

####### ContentChild et ContentChildren

pareil que ViewChild  mais scan la template en cherchant les ng-content 

A Voir pour les différences plus tard



###### Encapsulation 
Css : 

@Component({

   encapsulation: ViewEncapsulation.None
})


Trois types d'encpsulation :


- Emulated : par défaut Les styles dnas le main html sont propagés  tous les composants 
- native Les styles dans le main html ne sont pas utilisés  
- None : Les sytles définies dans les composants sont partout 

#### ElementRef

Permet d'accéder au DOM lié à un composant 

// pas trop à faire 
constructor(private elementRef : ElementRef){}
    .nativeElement est le vrai DOM Html
-> A utiliser en cas de lib js     


##### Doirective
import Directive, HostBindig @angular/core

Voir directive.d.ts pour les parmaètre/selecteur 
[] / {{}} etc 
@Directive({
    selector: '[behav]'
})

export class DirectorBehav{
    @HostBinding('style.color')
    c_color:string = 'blue';
    
   @HostListener('mouseenter')
    mouseEnterDiv()[
        this.color ='green'; 
    }
]
template 
<div behav>
</div>

#####HostBinding et HostListeern
Voir dessus 

@HostBinding 
associe le style à la valeur de l'attribue

Possibilité de binder des valeurs de la classe [propertyName]
AttributeName 


### RXJS et les observales

entre deux observable on peut transformer le flux (map)
- Observable.create();
- Observable.from();
- Observable.fromEvent();
- Observable.fromPromise();
- Observable.range();

observableBeers = Rx.obserable.from(beers)
.filter(beer => beer.price < 8)
.map (beer..... )

 observableBeers.subscribe(
    beer=>console.log(beer),
    err => console.log(err),
    () => console.log('streaming is overt')
)

##### Opérateurs 

Il y a une grande liste d'opérateur Rxjs

#########" Concat : 

permet d'avoir un observable qui concatène deux flux 
let event1 = Rx.observable.timer(4000).mapTo('First Response');
let event2 = Rx.observable.timer(1000).mapTo('Second Response');
Rx.Observable
    .concat(event1, event2)
    .subscribe (res => console.log(res))    
   
   -> Second Response, Second Response, Second Response First Response, Second Response
   
 ##### Detection des changements ( perf)
 
 Optimisation des bindings géré par angular 
 
 Stratégie de detection : 
 
 Angular fait du checking en profondeur. 
 {{v1}}}
 
 v1=== previousV1 --> renvoie true même si des sous proppriété ont été changées
 
 Pour cela il faut modifier la référence de V1 grâce à Immutabilité possible
 
 @Component({
    selector....
    ....
    changeDetection: ChangeDetectionStrategy.OnPush
 }) 

 Installation de la lib immutable avec npm
 
 #### Tests 
 
 e2e : Karma + protaractor en Jasmine
 Se base sur un driver : exemple Selenium 
 
 ###### Karma 
 
 Installation de karma-typescript en plus de karma-jasmine, karma-chrome-launcher 
 Angular Cli installe déjà ça 
 
 Conf est dans Karma.conf.js, c'est plusieurs plugins à installer au fur et à mesure en fonction des options
 - expression réugliere .specs.ts dans la conf
 
 " Jasmine fournie des méthoes qui permettent d'écrire des tests "
   - 3 a des tests unitaites : pattern 
    - Arrange (initliaze les variables) Act(eexcuter), assert(tests le résultat)
     - Describe défini normalement un scénario
     - un scnéario contient plusieurs tests 
    
 ##### TestBed 
   
   - TestBed permet de tester les dépendances : défini la même configuraiton qu'on a fait fait dans le module
   - fixture : décription du composant (prototype)
        - permet de créer une instance
        - DetectChanges() force la synchronisation antre le code et le browser (normalement fait par angular en temps normal)
        - debugElement fournit un ensemble de fonciton uqi permet de faire des requêtes 
    - beforeEach()
    
  #### Tests e2e 
  
  Utilisation de protactor : 
    - by permet de faire des reqyêtes sur les templates : by.css(....)        
    - ng start pour démarrer l'app
    - ng eée pour run les tests sur le serve 
    - regex .e2e-spec.ts dans protractor.js 
    
  ##### polyfills
  
  Gère la compatibilité inter navigateur
  
  
  #### css 
  style.css, tous les imports dedans pour que webpack puisse faire son build habituel 
  
  ##### typing.d.ts
  Défini le contrat entre systemJS et node module 
  
  ##### build 
  dev : ng-build 
  prod : ng-build --prod
        -> génération de fichier en pseudo aléatoire pour éviter les pb de cache
        
        
  ##### dépendance - optimisation
  AOT vs just in compilation (par défaut)
    dépendance npm @angular/compiler prends 40% du package js
    il faut activer l'aot pour diminuer, /!\ attention si lib extetne il y a des pb 
    ng build --prod --aot
         
            
### Industrialisation 

    # SonarQube
    
    # Nexus 
    
    # Steps 
        - Création du nom
        - Ce qui déclenche le build : Périodique : @daily
        - Ajout d'un shell linux pour le build 
                `
                cd ...
                npm install 
                ng test
                ng build --prod
                cp pathProject
                `
                
        - Nexus : Gestion du répository Npm 
                - admin/admin123
                - aller dans repositories : Créer en un 
                - selecitonner npm(hosted) (voir pour les autres plus tard : multi projets
                - url par défault 
                - conf npm : plusieurs endroits possible mais bonne pratique de laisser ça dans le projet lui même
                    - .npmrc 
                       - ajout de registery : 'urlduserveurNexus'
         - Sonar : Ajouter TypeScript 
            - npm install -g sonar-scanner
            
        