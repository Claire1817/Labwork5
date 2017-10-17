import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html'
})
export class TodolistPage {
  shoppingItems: Observable<any[]>;
  newItem = '';
 
  constructor(public db: AngularFireDatabase, public firebaseProvider: FirebaseProvider) {
    this.shoppingItems = this.db.list('shoppingItems').valueChanges();;
  }
 
  
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}