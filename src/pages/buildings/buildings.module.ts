import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingsPage } from './buildings';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BuildingsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingsPage),
    TranslateModule.forChild()
  ],
  exports: [BuildingsPage]
})
export class BuildingsPageModule {}
