import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'', component: CoursesComponent},
    {path:'viewCourse', component: CourseComponent}
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoursesRoutingModule {}