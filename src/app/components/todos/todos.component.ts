import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    //remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id) //return all id that are not todo id; clicking on delete button sends off an event in the todo-item component and we're emitting up delete todo
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
