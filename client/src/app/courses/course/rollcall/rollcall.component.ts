import { UserService } from './../../../user.service';
import { Subscription } from 'rxjs';
import { CoursesService } from './../../courses.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rollcall',
  templateUrl: './rollcall.component.html',
  styleUrls: ['./rollcall.component.scss']
})

export class RollcallComponent implements OnInit, OnChanges {

  subscriptions: Subscription[] = [];

  @Input('courseData') courseData: {id: string, name: string, description: string, instructor: string, students: string[]};

  constructor(
    private courseServices: CoursesService,
    private userServices: UserService,
  ) { }


  ngOnInit() {
    console.log(this.courseData);
    //this.subscriptions.push(this.courseServices.getCourseInfo(this.courseData).subscribe( (resp: {students: any}) => {
    //   this.student = this.courseData.students;
    // }));
  }


  ngOnChanges() {
    this.ngOnInit();

  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }

}
