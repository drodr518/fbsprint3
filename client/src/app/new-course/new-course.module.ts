import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularEditorModule} from '@kolkov/angular-editor';
import {NewCourseComponent} from './new-course/new-course.component';
import {NewCourseRoutingModule} from './new-course-routing.module';

@NgModule({
  declarations: [
    NewCourseComponent,
  ],

  imports: [
    CommonModule,
    NewCourseRoutingModule,
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
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],

})
export class NewCourseModule { }
