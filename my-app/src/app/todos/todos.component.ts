import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // create the array of todos to loop through
  // we use the model we created so they have a specific set of properties
  todos: Todo[];

  // variable to store the todo from input so we can pass it in the array
  inputTodo: string = '';

  constructor() {}

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
      },
    ];
  }

  addTodo() {
    //we simply push the new todo object with the text we get from inputTodo and completed as false in the todos array
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    //after the todo is pushed in the todos array we clear the input
    this.inputTodo = '';
  }
}
