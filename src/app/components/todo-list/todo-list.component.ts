import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { ITodo } from '../../interfaces/Itodo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos: ITodo[] = Array(10).fill({ placeholder: true });

  constructor(private todosService: TodoService) { }

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todosService.fetchTodos()
      .subscribe((todos: ITodo[]) => {
        this.todos = todos;
      });
  }

  addTodo(todo: ITodo) {
    this.todos.unshift(todo);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
  }  
}
