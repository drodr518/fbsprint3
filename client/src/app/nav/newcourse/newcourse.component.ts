import { Subscription } from 'rxjs/internal/Subscription';
import { CoursesService } from '../../courses/courses.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.scss']
})

export class NewcourseComponent implements OnInit {

  subscriptions: Subscription[] = [];
  courseForm: FormGroup;
  today = new Date();

  data: {id: string, name: string, description: string, instructor: string};
  instructors: {name: string, id: string}[] = [];

  constructor(
    public dialogRef: MatDialogRef<NewcourseComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: {id: string, name: string, description: string, instructor: string, endEnrollDate: string},
    private formBuilder: FormBuilder,
    private courseServices: CoursesService,
  ) {
    this.data = data;
    this.courseForm = this.formBuilder.group({
      title: [data.name, Validators.required],
      instructor: [data.instructor, Validators.required],
      description: [data.description, Validators.required],
      endEnrollDate: [data.endEnrollDate, Validators.required]
    });
  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    maxHeight: '15rem',
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


  addCourse() {

    if(this.courseForm.pristine) {
      this.dialogRef.close();
    }  else {

      const course = {
        id: this.data.id,
        name: this.courseForm.value.title,
        instructor: this.courseForm.value.instructor,
        description: this.courseForm.value.description
      }

      this.subscriptions.push(this.courseServices.updateCourse(course).subscribe( (resp) => {
        if(resp) {
          this.dialogRef.close(resp);
        }
      }));
    }

  }

  getDescriptionError() {
    return this.courseForm.hasError('required', 'courseForm.description')  ? '' : 'The description of a course cannot be empty!';
  }


  ngOnInit() {
    this.subscriptions.push(this.courseServices.getAllInstructors().subscribe( (resp: {name: string, id: string}[]) => {
      this.instructors = resp;
    }));
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
