import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth' 
import { HomePage } from '../home/home';

/**
 * Claire Gizard -- 1106363
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user= {} as User; 
 
  constructor(private aFAuth: AngularFireAuth, private nav: NavController) { }
 
  async register(user: User) {
    
    try {
    const result =  await this.aFAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    this.nav.setRoot(HomePage);   
    console.log(result);
  } 
    catch(e) {
      console.log(e);
    }
  }
}