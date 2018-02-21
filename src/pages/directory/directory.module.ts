import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryPage } from './directory';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    DirectoryPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectoryPage),
    TranslateModule.forChild()
  ],
  exports: [DirectoryPage]
})
export class DirectoryPageModule {}
