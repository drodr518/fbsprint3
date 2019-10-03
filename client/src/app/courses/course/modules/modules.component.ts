import { MatDialog } from '@angular/material';
import { UserService } from './../../../user.service';
import { CoursesService } from './../../courses.service';
import { Subscription } from 'rxjs';
import { 
  Module, 
  Content, 
  Document, 
  EmbededVideo, 
  ExternalLink, 
  Assessment
} from './../../courses.models';
import { Component, OnInit, Input } from '@angular/core';
import { NewContentComponent } from './new-content/new-content.component';
import { ModuleEditorComponent } from './module-editor/module-editor.component';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  @Input('current_course') current_course: string;

  modules = [];

  subscriptions: Subscription[] = [];

  constructor(
    private coursesServices: CoursesService,
    private userServices: UserService,
    private dialog: MatDialog,
    ) { }

  openNewContentDialog(sel_module) {

    const dialogRef = this.dialog.open(NewContentComponent, {
      width: '90%',
      data: {
        course: this.current_course,
        current_module: sel_module
      }
    });

    this.subscriptions.push(dialogRef.afterClosed().subscribe( (result) => {
      if(result) {
        this.ngOnInit();
        console.log(result);
      }
    }));
  }

  openEditModuleDialog() {
    const dialogRef = this.dialog.open(ModuleEditorComponent, {
      width: '90%',
    });

    this.subscriptions.push(dialogRef.afterClosed().subscribe( (result) => {
      if(result) {
        console.log(result);
      }
    }));
  }


  openInNewTab(url) {
    window.open(url, "_blank");
  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }
  
  ngOnInit() {

    this.subscriptions.push(this.coursesServices.getModules(this.current_course).subscribe( (resp: []) => {
      this.modules = resp;
      console.log(resp);
    }));
  }

}
