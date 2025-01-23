import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Angular Optimization',
      description: 'Optimize your Angular apps',
      image: 'assets/angular.jpg'
    },
    {
      title: 'Building Scalable APIs with .NET',
      description: 'High-performance back-end solutions',
      image: 'assets/dotnet.jpg'
    },
    {
      title: 'Cloud Deployment with AWS',
      description: 'Deploy scalable cloud solutions',
      image: 'assets/aws.jpg'
    }
  ];
}
