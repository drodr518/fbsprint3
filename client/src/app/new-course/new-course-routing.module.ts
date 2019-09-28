import { NgModule } from '@angular/core';
import { NewCourseComponent } from './new-course/new-course.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'', component: NewCourseComponent},
  {path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewCourseRoutingModule { }
