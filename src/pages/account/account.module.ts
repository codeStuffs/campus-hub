import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage } from './account';
import {TranslateModule} from "@ngx-translate/core";
import {PopoverPageModule} from "../popover/popover.module";

@NgModule({
  declarations: [
    AccountPage,

  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
    TranslateModule.forChild(),
    PopoverPageModule

  ],
  exports: [AccountPage]
})
export class AccountPageModule {}
