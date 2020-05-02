import { Component } from '@angular/core';

@Component({ // Decorator
  selector: 'app-root', // Diretiva
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';
  name: string = 'Eduardo';
}
