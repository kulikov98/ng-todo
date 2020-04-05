import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { ITodo } from '../interfaces/Itodo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos: ITodo[] = Array(10).fill({ placeholder: true });

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    console.log(this.todos);
    this.fetchTodos();
  }

  fetchTodos() {
    this.todosService.fetchTodos()
      .subscribe((todos: ITodo[]) => {
        this.todos = todos;
      });
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
