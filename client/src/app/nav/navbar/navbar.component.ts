import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myCourses = [];

  private student_id= "";
  private subscriptions: Subscription[] = [];

  constructor(private userServices: UserService) {
    this.student_id = this.userServices.user();
    
   }

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    this.subscriptions.push(this.userServices.getStudentCourses(this.student_id).subscribe( (resp: []) => {
      this.myCourses = resp;
    } ));
  }

  reload(){
  }

}
