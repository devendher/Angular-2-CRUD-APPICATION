
 /// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />
import {UserForm} from '../User';


describe('User ts file checking ', function() {
  it('checking', function() {
  var user={email:"macha.devendher35@gmail.com",contact:"90877676",address:"My Address"};
 //let result=PostDetails(user);
 //console.log(result);

expect(user).toEqual(user); 



  	})
})
