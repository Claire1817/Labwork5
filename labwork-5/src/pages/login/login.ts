import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth' 
import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  
  constructor(private afAuth: AngularFireAuth, private nav: NavController, public navParams: NavParams) {
 //   this.nav.setRoot(LoginPage);
   }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  async login(user: User) {
    
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.nav.setRoot(HomePage);        
      }
    } catch (e) {
      console.log(e);
    }
  }
}