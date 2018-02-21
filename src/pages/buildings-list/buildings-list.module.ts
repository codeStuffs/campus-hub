import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingsListPage } from './buildings-list';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BuildingsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingsListPage),
    TranslateModule.forChild()
  ],
  exports: [BuildingsListPage]
})
export class BuildingsListPageModule {}
