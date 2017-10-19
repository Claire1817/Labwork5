import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

 @NgModule({
  declarations: [
    MenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
})
export class MenuPageModule {}
