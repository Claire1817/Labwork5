import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

/**
 * Generated class for the TabsPage page.
 */

@IonicPage()

@Component({
  
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='HomePage';
  tab2Root='TodolistPage';
  tab3Root='AboutPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.myIndex = navParams.data.tabIndex 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}