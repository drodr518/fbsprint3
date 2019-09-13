import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

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

  private subscriptions: Subscription[] = [];


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.route.queryParams.subscribe( (params) => {
      if(params.select) {
        this.navItem = params.select;
      }
    }));
  }

  setNav(val: string) {
    this.navItem = val;
  }

  isEqual(val: string) {
    return this.navItem === val;
  }

}
