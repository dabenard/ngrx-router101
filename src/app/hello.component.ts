import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}!</h1>
  <h2>Hello {{routername}}!</h2>
  <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
  <br/>
  <a routerLink="/test" routerLinkActive="active" ariaCurrentWhenActive="page">Navigate</a>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  routername: string = 'init';

  ngOnInit() {
    console.log('Hello World!');
  }
}
