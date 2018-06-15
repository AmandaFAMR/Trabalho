import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalsPage } from './detals';

@NgModule({
  declarations: [
    DetalsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalsPage),
  ],
})
export class DetalsPageModule {}
