import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarraPage } from './barra';

@NgModule({
  declarations: [
    BarraPage,
  ],
  imports: [
    IonicPageModule.forChild(BarraPage),
  ],
})
export class BarraPageModule {}
