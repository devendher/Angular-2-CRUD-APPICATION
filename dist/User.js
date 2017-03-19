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
var UserForm = (function () {
    function UserForm() {
        this.user = { email: '', contact: '', address: '' };
        this.user1 = { email: '', contact: '', address: '' };
        this.listitems = ['list1', 'list2', 'list3'];
        this.contacts = [];
        this.userid = 0;
        this.heroes = [
            { id: 1, name: 'Superman' },
            { id: 2, name: 'Batman' },
            { id: 5, name: 'BatGirl' },
            { id: 3, name: 'Robin' },
            { id: 4, name: 'Flash' }
        ];
        this.Editvalue = false;
        this.showlist = false;
    }
    UserForm.prototype.PostDetails = function (user) {
        var copyObject = Object.assign({}, this.user);
        this.contacts.push(copyObject);
        this.showlist = true;
    };
    UserForm.prototype.deleteItem = function (idex1) {
        console.log(idex1);
        this.contacts.splice(idex1, 1);
    };
    UserForm.prototype.Editfun = function (i) {
        console.log(i);
        this.Editvalue = true;
        console.log(this.contacts[i]);
        this.user1 = this.contacts[i];
        this.userid = i;
    };
    UserForm.prototype.Update = function (u, i) {
        this.contacts[i] = u;
        console.log(this.contacts);
    };
    UserForm = __decorate([
        core_1.Component({
            selector: 'userform',
            templateUrl: './src/contactlist/contactlist.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserForm);
    return UserForm;
})();
exports.UserForm = UserForm;
//# sourceMappingURL=User.js.map