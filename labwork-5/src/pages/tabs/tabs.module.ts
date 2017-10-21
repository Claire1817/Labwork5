import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@NgModule({
  
  declarations: [
    TabsPage,
  ],
  
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
