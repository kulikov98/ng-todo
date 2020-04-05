import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/Itodo';
import { TodoService } from '../../services/todos.service';
import { faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Input() index: number;
  @Output() onRemoveTodo = new EventEmitter<number>();

  faTimesCircle: IconDefinition = faTimesCircle;
  pending = false;

  constructor(private todoService: TodoService) { }

  deleteTodo(id: number) {
    this.pending = true;
    this.todoService.deleteTodo(id)
      .subscribe(() => {
        this.pending = false;
        this.onRemoveTodo.emit(id);
      });
  }

  markComplete(todo: ITodo) {
    this.pending = true;
    this.todoService.markComplete(todo)
      .subscribe(() => {
        this.pending = false;
        todo.completed = !todo.completed
      });
  }
}
