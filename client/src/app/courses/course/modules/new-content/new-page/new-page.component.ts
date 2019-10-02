import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CoursesService } from './../../../../courses.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewContentComponent } from './../new-content.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent implements OnInit {

  @Input('current_dialog') current_dialog: MatDialogRef<NewContentComponent>;
  @Input('data') data: {course: string, current_module: string};

  newPageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coursesServices: CoursesService
  ) {
    this.newPageForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
   }

   pushPage() {
     const page = {
       title: this.newPageForm.value.title,
       page: this.newPageForm.value.body
     };

     console.log(this.data.course, this.data.current_module, page);

     this.coursesServices.newContentPush(this.data.course, this.data.current_module, page).subscribe( (resp) => {
       if(resp) {
         this.current_dialog.close(resp);
       }
     });
   }

  ngOnInit() {

  }

  onNoClick() {
    this.current_dialog.close();
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    outline: true,
    sanitize: false,
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
