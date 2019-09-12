import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  navs = ['Home', 'Modules', 'Grades', 'Discussions'];
  private navItem = 'Home';

  constructor() { }

  ngOnInit() {
  }

  setNav(val: string) {
    this.navItem = val;
  }

  isEqual(val: string) {
    return this.navItem === val;
  }

}
