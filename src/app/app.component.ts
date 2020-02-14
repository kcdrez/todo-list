import { Component } from '@angular/core';
import {ToDoList} from './components/todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-world';
}
