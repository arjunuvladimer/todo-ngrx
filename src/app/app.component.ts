import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Todo} from './todos/models/todos.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
 
}
