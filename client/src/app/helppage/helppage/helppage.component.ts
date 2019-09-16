import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.component.html',
  styleUrls: ['./helppage.component.scss']
})
export class HelppageComponent implements OnInit {

  courses = [
    {title: 'Danny Rodriguez', prof: "Phone Number"},
    {title: 'Admin 2', prof: "XXX"},
    {title: 'Admin 3', prof: "XXX"},
    {title: 'Admin 4', prof: "XXX"},
    {title: 'Admin 5', prof: "XXX"},
  //admins = [
  //  {name: 'Danny Rodriguez', phone: "(305)-439-1452", email: "drodr518@fiu.edu"},
   // {name: 'Joao Guiramaes', prof: "(999)-999-9999", email: "xxxxxx@fiu.edu"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
