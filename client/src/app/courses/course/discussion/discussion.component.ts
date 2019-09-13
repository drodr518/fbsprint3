import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {


  private subscriptions: Subscription[] = [];
  discussion_id: string = '';

  constructor(private route: ActivatedRoute) { }

  @Input('current_course') current_course: string;

  ngOnInit() {
    this.subscriptions.push(this.route.queryParams.subscribe( (params) => {
      if(params.discussion) {
        this.discussion_id = params.discussion;
      }
    }));
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
