import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManySubjectsPage } from './many-subjects';

@NgModule({
  declarations: [
    ManySubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManySubjectsPage),
  ],
})
export class ManySubjectsPageModule {}
