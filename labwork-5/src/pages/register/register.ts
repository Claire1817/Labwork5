import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth' 

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user= {} as User; 
 
  constructor(private aFAuth: AngularFireAuth, private nav: NavController, private alertCtrl: AlertController) { }
 
  async register(user: User) {
    
    try {
    const result =  await this.aFAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
  } 
    catch(e) {
      console.log(e);
    }
  }
}