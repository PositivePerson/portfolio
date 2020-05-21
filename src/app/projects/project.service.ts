import { PROJECTS } from '../projectsData/projects';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProjectService {
  getProjects() {
    return PROJECTS;
  }
}
