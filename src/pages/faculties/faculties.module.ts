import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultiesPage } from './faculties';

@NgModule({
  declarations: [
    FacultiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultiesPage),
  ],
  exports: [FacultiesPage]
})
export class FacultiesPageModule {}
