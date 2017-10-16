import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html'
})
export class TodolistPage {
  shoppingItems: AngularFireList<any[]>;
  newItem = '';
 
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }
 
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}