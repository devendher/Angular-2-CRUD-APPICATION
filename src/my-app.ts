import {Component,provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Http,HTTP_BINDINGS} from 'angular2/http';
import {UserForm} from './User';
import {Router,RouteConfig,ROUTER_BINDINGS,ROUTER_DIRECTIVES,ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
	selector:'my-app', 
	templateUrl:'./src/Routing.html',
	directives: [ROUTER_DIRECTIVES]
	
})
/*
In RouteConfig ,name should be always start with capital letter
*/
@RouteConfig([
	{path:'/userform',name:'Userform',component:UserForm}

	])

export class Main{

	myname:string="Hello";

}

bootstrap(Main,[HTTP_BINDINGS,ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),]);