import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingDetailPage } from './building-detail';
import { BuildingProvider } from '../../providers/providers';

@NgModule({
  declarations: [
    BuildingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildingDetailPage),
  ],
  exports: [BuildingDetailPage],
  providers: [BuildingProvider]
})
export class BuildingDetailPageModule {}
