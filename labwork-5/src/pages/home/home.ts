import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, private toast: ToastController) {
  }
  public goToDoList() {
    this.navCtrl.push('TodolistPage');
  }

  ionViewWillLoad(){
   this.afAuth.authState.subscribe(data => {
    if (data.email && data.uid) {
      this.toast.create({
         message:'Welcome to APP_NAME, ${data.email}',
         duration: 3000
        }).present();
    } else {
      this.toast.create({
        message:'Could not find authentification details',
        duration: 3000
       }).present();
    }
    
  });  
  }

}
