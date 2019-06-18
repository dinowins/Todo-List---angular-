import { Component } from '@angular/core';

@Component({ //decorator - contains meta data for component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-crash-todolist';

  constructor() {

  }
}
