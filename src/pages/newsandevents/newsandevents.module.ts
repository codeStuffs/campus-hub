import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsandeventsPage } from './newsandevents';

@NgModule({
  declarations: [
    NewsandeventsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsandeventsPage),
  ],
})
export class NewsandeventsPageModule {}
