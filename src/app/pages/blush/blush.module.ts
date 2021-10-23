import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlushRoutingModule } from './blush-routing.module';
import { BlushComponent } from './components/blush/blush.component';


@NgModule({
  declarations: [
    BlushComponent
  ],
  imports: [
    CommonModule,
    BlushRoutingModule
  ]
})
export class BlushModule { }
