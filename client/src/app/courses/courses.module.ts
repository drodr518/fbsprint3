import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ModulesComponent } from './course/modules/modules.component';
import { GradesComponent } from './course/grades/grades.component';
import { DiscussionsComponent } from './course/discussions/discussions.component';
import { InfoComponent } from './course/info/info.component';


@NgModule({
  declarations: [CourseComponent, CoursesComponent, ModulesComponent, GradesComponent, DiscussionsComponent, InfoComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ]
})
export class CoursesModule { }
