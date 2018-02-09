import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ContentPage } from './content';
import { ContentDrawer } from '../../components/content-drawer/content-drawer';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
   ContentPage,
   //ContentDrawer
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild(),
    ComponentsModule,
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }
