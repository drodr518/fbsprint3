import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.scss']
})
export class NewContentComponent implements OnInit {

  data;

  constructor(
    public dialogRef: MatDialogRef<NewContentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: {course: string,
      current_module: string},
  ) {
    this.data = data;
   }

  ngOnInit() {
  }

  

}
