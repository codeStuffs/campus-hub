import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingsListPage } from './buildings-list';
import { TranslateModule } from "@ngx-translate/core";
import { BuildingProvider } from '../../providers/providers';

@NgModule({
  declarations: [
    BuildingsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingsListPage),
    TranslateModule.forChild()
  ],
  exports: [BuildingsListPage],
  providers: [BuildingProvider]
})
export class BuildingsListPageModule { }
