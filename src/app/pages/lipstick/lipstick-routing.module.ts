import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LipstickComponent } from './components/lipstick/lipstick.component';

const routes: Routes = [
  {
    path: "", component: LipstickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LipstickRoutingModule { }
