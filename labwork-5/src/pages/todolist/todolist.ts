import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Item } from '../../models/item';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html'
})

export class TodolistPage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';
  result: Item[];
  
 
  constructor(public db: AngularFireDatabase, public firebaseProvider: FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
    }
 
   addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    console.log("IDDDD");
    console.log(id);
    this.firebaseProvider.removeItem(id);
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
}