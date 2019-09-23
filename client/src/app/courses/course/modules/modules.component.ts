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
    ) { }


  openInNewTab(url) {
    window.open(url, "_blank");
  }

  isAdmin() {
    return this.userServices.getIsAdmin();
  }
  
  ngOnInit() {

    this.subscriptions.push(this.coursesServices.getModules(this.current_course).subscribe( (resp: []) => {
      this.modules = resp;
      //console.log(resp);
    }));
  }

}
