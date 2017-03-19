var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var User_1 = require('./User');
var router_1 = require('angular2/router');
var Main = (function () {
    function Main() {
        this.myname = "Hello";
    }
    Main = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './src/Routing.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/userform', name: 'Userform', component: User_1.UserForm }
        ]), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
})();
exports.Main = Main;
browser_1.bootstrap(Main, [http_1.HTTP_BINDINGS, router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),]);
//# sourceMappingURL=my-app.js.map