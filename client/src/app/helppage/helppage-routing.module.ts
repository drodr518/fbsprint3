import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelppageComponent} from "./helppage/helppage.component";


const routes: Routes = [
  {path: '', component: HelppageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelppageRoutingModule { }
