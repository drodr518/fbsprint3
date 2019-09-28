import { NewContentComponent } from './courses/course/modules/new-content/new-content.component';
import { ModuleEditorComponent } from './courses/course/modules/module-editor/module-editor.component';
import { CourseDetailEditorComponent } from './courses/course/info/course-detail-editor/course-detail-editor.component';
import { DiscussionEditorComponent } from './courses/course/discussion/discussion-editor/discussion-editor.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSortModule,
  MatSelectModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NewCourseModule} from './new-course/new-course.module';
import { NewCourseComponent } from './new-course/new-course/new-course.component';
import { NewDiscussionComponent } from './courses/course/discussions/new-discussion/new-discussion.component';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSortModule,
    MatSelectModule,
    FlexLayoutModule,
    NewCourseModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [NewCourseComponent],
})
export class AppModule { }
