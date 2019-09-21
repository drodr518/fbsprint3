import { UserService } from './../../../user.service';
import { CoursesService } from './../../courses.service';
import { IPost } from './../../courses.models';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';

const POST_PER_PAGE: number = 50;


@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DiscussionComponent implements OnInit {


  private subscriptions: Subscription[] = [];

  // discussion variables
  id: string;                 // discussin id
  title: string;              // discussion title
  description : string;        // discussion description HTML format
  posts: IPost[] = [];         // discussion posts
  isClosed: boolean = false;   // discussion isClosed

  // pagination variables
  
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


  // runs when this component is loaded, gets parameters from url
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


  // adds post to discussion and reloads posts
  pushPost() {
    const post = {
      user_id: this.userServices.user(),
      user_name: "John Doe",
      date: new Date().getTime(),
      post:this.htmlContent};
    
    this.subscriptions.push(this.coursesServices.postDiscussionPost(this.current_course, this.id, post).subscribe( (resp) => {
      console.log(resp);
      if(resp) {
        this.totalPosts++;
        this.lastPage();
      }
    }));
    
  }

  // loads discussion information and the current page of posts
  loadDiscussion() {
    this.replying = false;
    this.htmlContent = '';

    this.subscriptions.push(this.coursesServices.getDiscussionInfo(this.current_course, this.id).subscribe( (resp: {title: any, description:any, isClosed:any}) => {
      this.description = resp.description;
      this.title = resp.title;
      this.isClosed = resp.isClosed;
    }))

    this.subscriptions.push(this.coursesServices.getDiscussionPosts(this.current_course, this.id, this.startFrom).subscribe( (resp:{posts: IPost[], total: number}) => {
      if(resp.posts.length > 0) {
        this.posts = resp.posts;
        this.totalPosts = resp.total;
      }
    }));
  }

  // allows the new post editor to display
  openEditor() {
    this.replying = true;
  }

  // disables the new post editor to display
  closeEditor() {
    this.replying = false;
  }

  // true is post is empty
  isPostEmpty() {
    return this.htmlContent == '';
  }

  // runs if input values change, current_course
  ngOnChanges() {
    this.ngOnInit();
  }

  // can only go to a previous page if current start position is not in the first page.
  canBack() {
    return this.startFrom >= POST_PER_PAGE;
  }


  // navigates to the previous discussion posts page
  back() {
    this.startFrom += -(POST_PER_PAGE);
    this.setParams();
  }

  // true if not on first page
  canNext() {
    return (this.startFrom + POST_PER_PAGE) < this.totalPosts;
  }

  // navigates to next page of discussion posts
  next() {
    this.startFrom += (POST_PER_PAGE);
    this.setParams();
  }

  // navigates to first page of discussion posts
  firstPage() {
    this.startFrom = 0;
    this.setParams();
  }

  //navigates to the last page of discussion posts
  lastPage() {
    this.startFrom = Math.trunc(this.totalPosts / POST_PER_PAGE) * POST_PER_PAGE
    this.setParams();
  }

  // sets the parameters for navigation and reloads the discussion
  setParams() {
    this.router.navigate(['/nav/courses/view-course'],{ queryParams: {course: this.current_course, select:'Discussion', discussion: this.id, start: this.startFrom} });
    this.loadDiscussion();
  }

}
