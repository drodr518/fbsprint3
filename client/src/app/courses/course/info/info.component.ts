
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnChanges {

  @Input('current_course') current_course: string;
  @Input('courseData') courseData: {id: string, name: string, description: string};

  description: string = "<h1>Title</h1><p>The cours is about lots of things. Things that will blow your mind.</p>";
  instructor: string = "Bob Le Builder";
  instructorEmail: string = "blebuild@fiu.edu"

  constructor() { }

  ngOnInit() {
    console.log(this.courseData);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
