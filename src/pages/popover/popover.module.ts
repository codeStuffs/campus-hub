import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';
import { EditAccountPageModule } from '../edit-account/edit-account.module';
@NgModule({
  declarations: [
    PopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverPage),
    EditAccountPageModule,
  ],
  exports: [PopoverPage]
})
export class PopoverPageModule {}
