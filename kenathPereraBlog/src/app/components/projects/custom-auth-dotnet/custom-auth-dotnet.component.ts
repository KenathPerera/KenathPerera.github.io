import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-custom-auth-dotnet',
  imports: [],
  templateUrl: './custom-auth-dotnet.component.html',
  styleUrl: './custom-auth-dotnet.component.scss'
})
export class CustomAuthDotnetComponent implements AfterViewInit {


  @ViewChild('classCode', { static: true }) classCode!: ElementRef;
  @ViewChild('controllerCode', { static: true }) controllerCode!: ElementRef;
  @ViewChild('angularCode', { static: true }) angularCode!: ElementRef;

  ngAfterViewInit(): void {
    hljs.highlightElement(this.classCode.nativeElement);
    hljs.highlightElement(this.controllerCode.nativeElement);
    hljs.highlightElement(this.angularCode.nativeElement);

  }


}
