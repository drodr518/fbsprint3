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
  @Input('courseData') courseData: {id: string, name: string, description: string};

  description: string = "<h1>Title</h1><p>The cours is about lots of things. Things that will blow your mind.</p>";
  instructor: string = "Bob Le Builder";
  instructorEmail: string = "blebuild@fiu.edu"

  constructor(private courseServices: CoursesService) { }

  ngOnInit() {
    //console.log(this.courseData);
    this.subscriptions.push(this.courseServices.getInstructorInfo(this.courseData.instructor).subscribe( (resp: {contactEmail: string, name: string}) => {
      this.instructor = resp.name;
      this.instructorEmail = resp.contactEmail;
    }));
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
