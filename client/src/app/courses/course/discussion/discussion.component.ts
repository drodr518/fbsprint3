import { Discussion, Post } from './../../courses.models';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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

  discussion: Discussion = {
    id: "missing_id",
    title: "missing_title",
    description: '<h4>Default Description</h4><p>Ths discussion is about this or that.</p>',
    posts: [],
    isClosed: false
  };
  replying = false;
  htmlContent = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
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
        this.discussion.id = params.Discussion;
        //this.discussion_id = params.discussion;
      }
    }));

  }

  sanitizeHtml(val) {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }

  pushPost() {
    this.discussion.posts.push({
      user_id: "test_user_id_here",
      user_name: "John Doe",
      date: new Date().toUTCString(),
      post:this.htmlContent} as Post);
    //this.posts.push(this.htmlContent);
    this.replying = false;
    this.htmlContent = '';
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

}
