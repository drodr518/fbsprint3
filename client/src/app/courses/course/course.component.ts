import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  navs = [
    {val:'Home', ico: 'home'}, 
    {val:'Modules', ico:'view_module'}, 
    {val:'Grades', ico:'assessment'}, 
    {val:'Discussions', ico: 'forum'}];
    
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
