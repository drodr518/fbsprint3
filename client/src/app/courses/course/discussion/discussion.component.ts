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
  replying = false;
  discussion_id: string = '';
  htmlContent = '';
  posts = [];
  isClosed = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }

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
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
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
        this.discussion_id = params.discussion;
      }
    }));
  }

  sanitizeHtml(val) {
    return this.sanitizer.bypassSecurityTrustHtml(val);
  }

  pushPost() {
    this.posts.push(this.htmlContent);
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
