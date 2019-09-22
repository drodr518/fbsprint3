import { UserService } from './../../../user.service';
import { CoursesService } from './../../courses.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DIscussions } from '../../courses.models';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit, OnChanges {

  discussions: DIscussions[] = [];
  subscriptions: Subscription[] = [];
  @Input('current_course') current_course: string;

  constructor(
    private coursesServices: CoursesService,
    private userServices: UserService
    ) { }


  // Runs whenever this component is loaded
  ngOnInit() {
    this.loadDiscussions();
  }

  // Loads discussions id, title, and description
  loadDiscussions() {
    this.subscriptions.push(this.coursesServices.getDiscussions(this.current_course).subscribe( (resp: DIscussions[]) => {
      this.discussions = resp;
    }))
  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }

  // Runs whenever input values change
  ngOnChanges() {

    this.ngOnInit();
  }
}
