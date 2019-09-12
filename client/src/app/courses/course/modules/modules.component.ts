import { 
  Module, 
  Content, 
  Document, 
  EmbededVideo, 
  ExternalLink, 
  Assessment
} from './../../courses.models';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  modules : Module[] = [
    {id: '0', name: 'Module 1', resources: [
      {title: 'Google', link: "https://www.google.com"} as Content,
      {title: 'Microsoft', link: "https://www.microsoft.com"} as Content,
      {title: 'Youtube', link: "https://www.youtube.com"} as Content,
    ], },
    {id: '1', name: 'Module 2', resources: [
      {title: 'Google', url: "https://www.google.com"} as Content,
      {title: 'Microsoft', url: "https://www.microsoft.com"} as Content,
      {title: 'Youtube', url: "https://www.youtube.com"} as Content,
    ], }
  ];

  constructor() { }

  ngOnInit() {
  }

}
