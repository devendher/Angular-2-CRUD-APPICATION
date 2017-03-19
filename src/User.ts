import {Component} from 'angular2/core';

@Component({
	selector:'userform',
	templateUrl:'./src/contactlist/contactlist.html'

})

export class UserForm {
	user:Object={email:'',contact:'',address:''};
	user1:Object={email:'',contact:'',address:''};

	listitems=['list1','list2','list3'];
	contacts:string[]=[];
	userid:Number=0;
	heroes= [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];
Editvalue:boolean=false;
showlist:boolean=false;


	   
		PostDetails(user){
			let copyObject=Object.assign({},this.user);
			this.contacts.push(copyObject);

			//this.contacts.push(Object.assign({},user));
			this.showlist=true;
			//return this.contacts;

			

		}
		deleteItem(idex1){
			console.log(idex1);
			this.contacts.splice(idex1,1)
		}
		Editfun(i){
			console.log(i);
			this.Editvalue=true;
			console.log(this.contacts[i]);
			this.user1=this.contacts[i];
			this.userid=i;

			}

		Update(u,i){
			this.contacts[i]=u;
			console.log(this.contacts);


		}
	

}