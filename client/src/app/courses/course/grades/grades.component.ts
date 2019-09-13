import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  constructor() { }

  @Input('current_course') course: string;

  displayedColumns: string[] = ['title', 'dueDate', 'doneDate', 'score', 'outOf'];
  dataSource = [
    {title: 'Quiz 1', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 2', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 3', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 4', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 5', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 6', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
    {title: 'Quiz 7', dueDate: '12/12/19', doneDate: '11/12/19', score: 10 , outOf: 10},
  ];

  ngOnInit() {
  }

}
