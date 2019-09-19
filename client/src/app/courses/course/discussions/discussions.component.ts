import { CoursesService } from './../../courses.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit, OnChanges {

  discussions: {id: string, title: string, description: string}[] = [];

  subscriptions: Subscription[] = [];

  constructor(private coursesServices: CoursesService) { }

  @Input('current_course') current_course: string;

  ngOnInit() {
    this.subscriptions.push(this.coursesServices.getDiscussions(this.current_course).subscribe( (resp:{id: string, title: string, description: string}[]) => {
      console.log(resp);
      this.discussions = resp;
    }))
  }

  ngOnChanges() {
    console.log(this.current_course);
    this.ngOnInit();
  }
}
