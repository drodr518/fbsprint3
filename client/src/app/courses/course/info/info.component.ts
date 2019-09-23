import { UserService } from './../../../user.service';
import { Subscription } from 'rxjs';
import { CoursesService } from './../../courses.service';

import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
    ) { }

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
