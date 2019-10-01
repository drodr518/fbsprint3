import { CoursesService } from './../../../../courses.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { NewContentComponent } from '../new-content.component';

@Component({
  selector: 'app-new-embedded-video',
  templateUrl: './new-embedded-video.component.html',
  styleUrls: ['./new-embedded-video.component.scss']
})
export class NewEmbeddedVideoComponent implements OnInit {

  @Input('current_dialog') current_dialog: MatDialogRef<NewContentComponent>;
  @Input('data') data: {course: string, current_module: string};

  newEmbedForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private coursesServices: CoursesService
    ) {
      this.newEmbedForm = this.formBuilder.group({
        title: ['', Validators.required],
        code: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

  pushEmbed() {
    const content = {
      title: this.newEmbedForm.value.title,
      embedded: this.newEmbedForm.value.code
    };

    this.coursesServices.newContentPush(this.data.course, this.data.current_module, content).subscribe( (resp) => {
      console.log(resp);
      this.current_dialog.close(resp);
    });
  }

  onNoClick() {
    this.current_dialog.close();
  }

}