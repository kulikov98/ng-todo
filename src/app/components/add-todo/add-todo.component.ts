import { Component, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todos.service';
import { ITodo } from 'src/app/interfaces/Itodo';
import { faCircleNotch, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  @Output() onAddTodo = new EventEmitter<ITodo>();

  title = '';
  pending = false;
  faCircleNotch: IconDefinition = faCircleNotch;

  constructor(private todoService: TodoService) { }

  addTodo() {
    if (this.title === '') return;

    this.pending = true;

    const newTodo = {
      userId: 1,
      title: this.title,
      completed: false
    }

    this.todoService.addTodo(newTodo)
      .subscribe((todo: ITodo) => {
        this.onAddTodo.emit(todo);
        this.pending = false;
        this.title = '';
      });
  }
}
