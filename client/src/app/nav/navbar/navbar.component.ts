import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myCourses = [
    {id:'-LoXRZvbw_tJaWGIxgGF', title: "Philosophy"},
    {id:'-english', title: "English"},
    {id:'-math', title: "Math"},
    {id:'-science', title: "Science"},
  ];


  constructor() { }

  ngOnInit() {
  }

}
