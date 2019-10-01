import { NewCourseService } from './../new-course.service';
import {Component, OnInit, OnChanges, Optional, Inject} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  private authorized = false;
  subscriptions: Subscription[] = [];
  courseForm: FormGroup;
  selected = 'option2';
  data: {id: string, name: string, description: string, instructor: string};
  instructors: {name: string, id: string}[] = [];
constructor(
  // public dialogRef: MatDialogRef<NewCourseComponent>,
  // @Optional() @Inject(MAT_DIALOG_DATA) data: {id: string, name: string, description: string, instructor: string},
  private formBuilder: FormBuilder,
  private newcourseService: NewCourseService,
) {
  this.courseForm = this.formBuilder.group({title:['', Validators.required]});
}

// config: AngularEditorConfig = {
//   editable: true,
//   spellcheck: true,
//   height: '15rem',
//   minHeight: '5rem',
//   maxHeight: '15rem',
//   placeholder: 'Enter text here...',
//   translate: 'no',
//   outline: true,
//   sanitize: false,
//   defaultFontName: 'Arial',
//   customClasses: [
//     {
//       name: 'titleText',
//       class: 'titleText',
//       tag: 'h1',
//     },
//   ]
// };


addCourse() {
  //
  // if (this.courseForm.pristine) {
  //   this.dialogRef.close();
  // }  else {

    const course = {
      id: this.data.id,
      name: this.courseForm.value.title,
      instructor: this.courseForm.value.instructor,
      description: this.courseForm.value.description
    };

    // this.subscriptions.push(this.newcourseService.addCourse(course).subscribe( (resp) => {
    //   if (resp) {
    //     this.dialogRef.close(resp);
    //   }
    // }));
  }



getDescriptionError() {
  return this.courseForm.hasError('required', 'courseForm.description')  ? '' : 'The description of a course cannot be empty!';
}


ngOnInit() {
  this.subscriptions.push(this.newcourseService.addCourse(this.courseForm).subscribe((resp: { name: string, id: string }[]) => {
    this.instructors = resp;
  }));
}
// }
//
// onNoClick() {
//   this.dialogRef.close();
// }

}
