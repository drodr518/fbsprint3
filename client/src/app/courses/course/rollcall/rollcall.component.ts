import { UserService } from './../../../user.service';
import { Subscription } from 'rxjs';
import { CoursesService } from './../../courses.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Students} from '../../courses.models';

@Component({
  selector: 'app-rollcall',
  templateUrl: './rollcall.component.html',
  styleUrls: ['./rollcall.component.scss']
})

export class RollcallComponent implements OnInit, OnChanges {

  subscriptions: Subscription[] = [];
  students: {name: string, id: string}[] = [];

  // private course_id = '-Lp5NZdSH8TLyL92KkIq';
  @Input('courseData') courseData: {id: string, name: string, description: string, instructor: string, student: string};

  constructor(
    private courseServices: CoursesService,
    private userServices: UserService,
  ) {
  }

loadStudents(){
  this.subscriptions.push(this.courseServices.getCourseInfo(this.courseData.student).subscribe( (resp: Students[]) => {
    this.students = resp;
  }));
}

  ngOnInit() {
  this.loadStudents();
  this.subscriptions.push(this.courseServices.getAllStudents().subscribe( (resp: {name: string, id: string}[]) => {
      this.students = resp;
    }));
  }


  ngOnChanges() {
    this.ngOnInit();

  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }

}
