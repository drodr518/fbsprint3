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
      {title: 'Google', link: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"} as Content,
      {title: 'Microsoft', link: ""} as Content,
      {title: 'Youtube', link: ""} as Content,
    ], },
    {id: '1', name: 'Module 2', resources: [
      {title: 'Google', url: "https://www.google.com"} as Content,
      {title: 'Microsoft', url: "https://www.microsoft.com"} as Content,
      {title: 'Quiz 1', isTimed: "false"} as Content,
    ], }
  ];

  

  constructor() { }


  openInNewTab(url) {
    window.open(url, "_blank");
  }
  
  ngOnInit() {
  }

}
