import { MatDialog } from '@angular/material';
import { UserService } from './../../../user.service';
import { Subscription } from 'rxjs';
import { CoursesService } from './../../courses.service';

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CourseDetailEditorComponent } from './course-detail-editor/course-detail-editor.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnChanges {

  subscriptions: Subscription[] = [];

  @Input('current_course') current_course: string;
  @Input('courseData') courseData: {id: string, name: string, description: string, instructor: string};

  description: string;
  instructor: string;
  instructorEmail: string;

  constructor(
    private courseServices: CoursesService,
    private userServices: UserService,
    private dialog: MatDialog,
    ) { }

  
  openEditCourse() {
    const dialogRef = this.dialog.open(CourseDetailEditorComponent, {
      width: '90%',
      height: '90%',
      data: this.courseData
    });

    this.subscriptions.push(dialogRef.afterClosed().subscribe( (result) => {
      if(result) {
        console.log(result);
      }
    }));
  }

  ngOnInit() {
    //console.log(this.courseData);
    this.subscriptions.push(this.courseServices.getInstructorInfo(this.courseData.instructor).subscribe( (resp: {contactEmail: string, name: string}) => {
      this.instructor = resp.name;
      this.instructorEmail = resp.contactEmail;
    }));
  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }


  ngOnChanges() {
    this.ngOnInit();
  }

}
