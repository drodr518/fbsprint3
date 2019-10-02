import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NewContentComponent } from './../new-content.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';

function urlValidator(control: FormControl) {
  let link: string = control.value;
  if(link.indexOf("http://") != 0 && link.indexOf("https://") != 0) {
    
    return link;
  }
  return null;
}

@Component({
  selector: 'app-new-external-link',
  templateUrl: './new-external-link.component.html',
  styleUrls: ['./new-external-link.component.scss']
})
export class NewExternalLinkComponent implements OnInit {

  @Input('current_dialog') current_dialog: MatDialogRef<NewContentComponent>;
  @Input('data') data: {course: string, current_module: string};

  newLinkForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private coursesServices: CoursesService,
  ) {
    this.newLinkForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', [Validators.required, urlValidator]]
    });
  }

  pushLink() {
    const content = {
      title: this.newLinkForm.value.title,
      url: this.newLinkForm.value.link
    };
    this.coursesServices.newContentPush(this.data.course, this.data.current_module, content).subscribe( (resp) => {
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

}
