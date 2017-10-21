import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDHXPOevL35ZPZx25lrrhMTeMgpmlRv3Bs",
  authDomain: "labwork5-bfcb8.firebaseapp.com",
  databaseURL: "https://labwork5-bfcb8.firebaseio.com",
  projectId: "labwork5-bfcb8",
  storageBucket: "labwork5-bfcb8.appspot.com",
  messagingSenderId: "625626025533"
};

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}

