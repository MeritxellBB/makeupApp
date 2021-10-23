import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LipstickRoutingModule } from './lipstick-routing.module';
import { LipstickComponent } from './components/lipstick/lipstick.component';


@NgModule({
  declarations: [
    LipstickComponent
  ],
  imports: [
    CommonModule,
    LipstickRoutingModule
  ]
})
export class LipstickModule { }
