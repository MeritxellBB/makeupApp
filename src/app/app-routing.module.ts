import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LipstickModule } from './pages/lipstick/lipstick.module';
import { BlushModule } from './pages/blush/blush.module';

const routes: Routes = [
  {
    path: "home", loadChildren: () => import('./pages/home/home.module'). then(m=>HomeModule) 
  },
  {
    path: "lipstick", loadChildren: () => import('./pages/lipstick/lipstick.module'). then(m=>LipstickModule) 
  },
  {
    path: "blush", loadChildren: () => import('./pages/blush/blush.module'). then(m=>BlushModule) 
  },
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
