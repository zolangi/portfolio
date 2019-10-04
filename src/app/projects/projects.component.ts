import { Component, OnInit } from '@angular/core';
import { Project } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project = {
    name: 'Visualization Tool for Composition of Cloud Computing Services',
    description: 'NASA DIRECT-STEM Research Project. Develop a software tool to compose cloud computing web services.',
    purpose: 'Users able to use this tool to structure and combine existing web services to create a system of cloud computing services. It is designed to facilitate the process of tracking and displaying the composition of cloud services and the results of these composite services.',
    hardware: 'N/A',
    software: 'AngularCLI, Angular 5, Node.js, Npm, D3.js, Java, MySQL',
    link: 'https://github.com/zolangi/CSULA-DIRECTSTEM-Webservices',
  };

  constructor() { }

  ngOnInit() {
  }

}
