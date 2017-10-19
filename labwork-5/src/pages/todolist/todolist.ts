import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
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
  shoppingItems: Observable<any[]>;
  newItem = '';
  result: Item[];
 
  constructor(public db: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.db.list('shoppingItems').valueChanges()
    this.shoppingItems.subscribe(result => console.log(result));

    this.shoppingItems.subscribe(result => 
      console.log(this.result = result)
    
    );
/* 
      this.shoppingItems.subscribe(
       items => {
        items.forEach(snapshot => {
         console.log("aaaaaa");
          console.log(snapshot.name, snapshot.key);
        console.log("aaaaaa");
        });
      }); */
    }
 
   addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    console.log("IDDDD");
    console.log(id);
    this.firebaseProvider.removeItem(id);
  }
}