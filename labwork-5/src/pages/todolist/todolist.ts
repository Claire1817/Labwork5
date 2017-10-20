import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
 
  constructor(public db: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
    // this.shoppingItems = this.db.list('/shoppingItems/');
//    this.shoppingItems.subscribe(result => console.log(result));

/*     this.shoppingItems.subscribe(result => 
      console.log(this.result = result)
    );
 */    }
 
   addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    console.log("IDDDD");
    console.log(id);
    this.firebaseProvider.removeItem(id);
  }
}