import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  courses = [
    {title: 'Computer Organization', prof: "Raj Mahal"},
    {title: 'Theory of Algorithms', prof: "John Doe"},
    {title: 'Software Engineering I', prof: "Jane Doe"},
    {title: 'Introduction to Blue Steel', prof: "Jenna Crew"},
    {title: 'Robot Vision', prof: "Lina Ferrer"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
