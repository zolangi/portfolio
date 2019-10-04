import { Component, OnInit } from '@angular/core';
import { Project } from './projects';
import { PROJECTS } from './project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

}
