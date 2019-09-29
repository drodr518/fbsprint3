import { NewContentComponent } from './../new-content.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-external-link',
  templateUrl: './new-external-link.component.html',
  styleUrls: ['./new-external-link.component.scss']
})
export class NewExternalLinkComponent implements OnInit {

  @Input('current_dialog') current_dialog: MatDialogRef<NewContentComponent>;
  @Input('data') data: {course: string, current_module: string};
  
  constructor() { }

  ngOnInit() {
  }

}
