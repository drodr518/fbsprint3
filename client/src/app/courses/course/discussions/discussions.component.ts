import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {

  discussions = [
    {title: 'The chicken or the egg?', id: 0},
    {title: 'To be or not to be', id: 1},
    {title: 'Discussion 1', id: 2},
    {title: 'Discussion 2', id: 3},
    {title: 'Discussion 3', id: 4},
  ];

  constructor() { }

  ngOnInit() {
  }

}
