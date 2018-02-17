import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultiesPage } from './faculties';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    FacultiesPage,
  ],
  imports: [
    IonicPageModule.forChild(FacultiesPage),
    TranslateModule.forChild()
  ],
  exports: [FacultiesPage]
})
export class FacultiesPageModule {}
