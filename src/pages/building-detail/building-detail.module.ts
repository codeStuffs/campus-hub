import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingDetailPage } from './building-detail';

@NgModule({
  declarations: [
    BuildingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingDetailPage),
  ],
  exports: [BuildingDetailPage]
})
export class BuildingDetailPageModule {}
