import { Component } from '@angular/core';


// this is a component decorator. Object with configuration settings for the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test-angular';
}
