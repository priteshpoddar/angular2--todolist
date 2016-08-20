import { Component } from '@angular/core';
import { TodoComponentComponent } from './todo-component/index'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoComponentComponent]
})
export class AppComponent {
  title = 'Todo App in Angular 2';
}
