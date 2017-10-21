import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@IonicPage(
  {
    name: 'page-tabs'
  }
  )
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = 'HomePage';
  tab2 = 'TodolistPage';
  tab3 = 'AboutPage';
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  }