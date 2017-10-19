import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@NgModule({
    declarations: [
        HomePage,
    
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    
    ],
})
export class LoginPageModule {}
