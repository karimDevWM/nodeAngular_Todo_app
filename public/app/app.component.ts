import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-app',
  template: `<h1>NodeTodo</h1>
  <ul>
      <li *ngFor="let todo of todos">
        {{todo.todo}} - {{todo.isDone}} - {{todo.username}}
      </li>
    </ul>`,
  providers: [ TodoService ]
})
export class AppComponent  { 
  todos: Todo[];
  constructor(private todoService: TodoService) { }
  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  };
  getTodosByUsername(username: string): void {
    this.todoService.getTodosByUsername(username).then(todos => this.todos = todos);
  }
  ngOnInit(): void {
    this.getTodos();
    this.getTodosByUsername("test");
  }
}
