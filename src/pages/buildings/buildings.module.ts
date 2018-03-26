import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingsPage } from './buildings';
import {TranslateModule} from "@ngx-translate/core";
import { BuildingProvider } from '../../providers/providers';

@NgModule({
  declarations: [
    BuildingsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingsPage),
    TranslateModule.forChild()
  ],
  exports: [BuildingsPage],
  providers: [BuildingProvider]
})
export class BuildingsPageModule {}
