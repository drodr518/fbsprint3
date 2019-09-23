import { 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatButtonModule, 
  MatListModule, 
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatButtonToggleModule
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
import { DiscussionEditorComponent } from './course/discussion/discussion-editor/discussion-editor.component';
import { NewDiscussionComponent } from './course/discussions/new-discussion/new-discussion.component';
import { CourseDetailEditorComponent } from './course/info/course-detail-editor/course-detail-editor.component';
import { NewContentComponent } from './course/modules/new-content/new-content.component';
import { ModuleEditorComponent } from './course/modules/module-editor/module-editor.component';



@NgModule({
  declarations: [
    CourseComponent, 
    CoursesComponent, 
    ModulesComponent, 
    GradesComponent, 
    DiscussionsComponent, 
    InfoComponent, DiscussionComponent, AssessmentComponent, DiscussionEditorComponent, NewDiscussionComponent, CourseDetailEditorComponent, NewContentComponent, ModuleEditorComponent
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
    MatButtonToggleModule
  ],
  entryComponents: [
    DiscussionEditorComponent,
    NewDiscussionComponent,
    CourseDetailEditorComponent,
    ModuleEditorComponent,
    NewContentComponent,
  ]
})
export class CoursesModule { }
