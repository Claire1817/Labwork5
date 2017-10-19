import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

@ViewChild(Nav) nav: Nav;

pages: PageInterface[] = [
  { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
  { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 1, icon: 'contacts'},
  { title: 'TodoList', pageName: 'TodolistPage', icon: 'home'},
]
activePage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activePage = this.pages[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

/**
 * Adding code for Tab
 */
  rootPage = "TabsPage";
  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = {tabIndex: page.index};
    }
    if (this.nav.getActiveChildNav && page.index != undefined) {     
      this.nav.getActiveChildNav().select(page.index);
      this.activePage = page;       
    } else {
      this.nav.setRoot(page.pageName, params);
      this.activePage = page;  
    }
  }

  isActive(page: PageInterface) {
    if (page === this.activePage) {
      return 'primary';
    } else {
      return ;
    }
  }
}

