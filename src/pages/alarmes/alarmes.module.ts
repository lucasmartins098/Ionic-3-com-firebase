import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmesPage } from './alarmes';

@NgModule({
  declarations: [
    AlarmesPage,
  ],
  imports: [
    IonicPageModule.forChild(AlarmesPage),
  ],
})
export class AlarmesPageModule {}
