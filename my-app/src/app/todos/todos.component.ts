import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // create the array of todos to loop through
  // we use the model we created so they have a specific set of properties
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    // add some todos in the array to start with
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      }
    ]
  }

}
