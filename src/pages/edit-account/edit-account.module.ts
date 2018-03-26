import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAccountPage } from './edit-account';
import { TranslateModule } from '@ngx-translate/core';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
@NgModule({
  declarations: [
    EditAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAccountPage),
    TranslateModule.forChild(),
    NgxErrorsModule
  ],
})
export class EditAccountPageModule {}
