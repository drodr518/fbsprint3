import { 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatButtonModule, 
  MatListModule, 
  MatExpansionModule,
  MatCardModule,
  MatTableModule
} from '@angular/material';

import { CoursesRoutingModule } from './courses-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ModulesComponent } from './course/modules/modules.component';
import { GradesComponent } from './course/grades/grades.component';
import { DiscussionsComponent } from './course/discussions/discussions.component';
import { InfoComponent } from './course/info/info.component';
import { DiscussionComponent } from './course/discussion/discussion.component';

import { FormsModule} from '@angular/forms';

import { AngularEditorModule} from '@kolkov/angular-editor';
import { AssessmentComponent } from './assessment/assessment.component';



@NgModule({
  declarations: [
    CourseComponent, 
    CoursesComponent, 
    ModulesComponent, 
    GradesComponent, 
    DiscussionsComponent, 
    InfoComponent, DiscussionComponent, AssessmentComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    AngularEditorModule,
    FormsModule,
  ]
})
export class CoursesModule { }
