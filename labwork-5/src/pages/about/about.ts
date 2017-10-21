import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

 @IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  public gotoHome(){
    this.navCtrl.push('HomePage');
  }
 
  public goToDoList(){
    this.navCtrl.push('TodolistPage');
}
 
  public goAbout(){
    this.navCtrl.push('AboutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}

