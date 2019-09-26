import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-course-detail-editor',
  templateUrl: './course-detail-editor.component.html',
  styleUrls: ['./course-detail-editor.component.scss']
})
export class CourseDetailEditorComponent implements OnInit {

  courseForm: FormGroup;
  selected = 'option2';

  constructor(
    public dialogRef: MatDialogRef<CourseDetailEditorComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: {id: string, name: string, description: string, instructor: string},
    private formBuilder: FormBuilder,
  ) {
    this.courseForm = this.formBuilder.group({
      title: [data.name, Validators.required],
      instructor: [data.instructor, Validators.required],
      description: [data.description, Validators.required],
    });
   }
  

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}