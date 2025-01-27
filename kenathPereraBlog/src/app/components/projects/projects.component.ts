import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Custom Authorization with .NET API\'s',
      description: 'Optimized .NET API solutions for seamless custom authorization and high-performance back-end systems',
      image: '/images/dotnet_logo.png'
    },
    {
      title: 'Cloud Deployment with AWS',
      description: 'Deploy scalable cloud solutions',
      image: 'assets/aws.jpg'
    }
  ];
}
