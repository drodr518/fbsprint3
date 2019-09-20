import { UserService } from './../../../user.service';
import { CoursesService } from './../../courses.service';
import { Discussion, Post } from './../../courses.models';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DiscussionComponent implements OnInit {


  private subscriptions: Subscription[] = [];

  // discussion variables
  id;
  title;
  description;
  posts = [];
  isClosed = false;

  // pagination variables
  postsPerPage: number = 50;
  totalPosts: number = 0;
  startFrom:number = 0;


  // rich text editor input
  replying = false;
  htmlContent = '';

  constructor(
    private route: ActivatedRoute,
    private coursesServices: CoursesService,
    private userServices: UserService,
    private router: Router,
    ) {}

  @Input('current_course') current_course: string;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',   
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  ngOnInit() {

    
    this.subscriptions.push(this.route.queryParams.subscribe( (params) => {
      if(params.discussion) {
        this.id = params.discussion;
      }

      if(params.start) {
        this.startFrom = Number(params.start);
      }
    }));

    this.loadDiscussion();

  }


  pushPost() {
    const post = {
      user_id: this.userServices.user(),
      user_name: "John Doe",
      date: new Date().getTime(),
      post:this.htmlContent};
    
    this.subscriptions.push(this.coursesServices.postDiscussionPost(this.current_course, this.id, post).subscribe( (resp) => {
      console.log(resp);
    }));

    this.loadDiscussion();
    
  }

  loadDiscussion() {
    this.replying = false;
    this.htmlContent = '';

    this.subscriptions.push(this.coursesServices.getDiscussionInfo(this.current_course, this.id).subscribe( (resp: {title: any, description:any, isClosed:any}) => {
      this.description = resp.description;
      this.title = resp.title;
      this.isClosed = resp.isClosed;
    }))

    this.subscriptions.push(this.coursesServices.getDiscussionPosts(this.current_course, this.id, this.startFrom).subscribe( (resp:{posts: [], total: number}) => {
      if(resp.posts.length > 0) {
        this.posts = resp.posts;
        this.totalPosts = resp.total;
      }
    }));
  }

  openEditor() {
    this.replying = true;
  }

  closeEditor() {
    this.replying = false;
  }

  isPostEmpty() {
    return this.htmlContent == '';
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  // can only go to a previous page if current start position is not in the first page.
  canBack() {
    return this.startFrom >= this.postsPerPage;
  }

  back() {
    this.startFrom += -(this.postsPerPage);
    this.setParams();
  }

  canNext() {
    return (this.startFrom + this.postsPerPage) < this.totalPosts;
  }

  next() {
    this.startFrom += (this.postsPerPage);
    this.setParams();
  }

  setParams() {
    this.router.navigate(['/nav/courses/view-course'],{ queryParams: {course: this.current_course, select:'Discussion', discussion: this.id, start: this.startFrom} });
    this.loadDiscussion();
  }

}
