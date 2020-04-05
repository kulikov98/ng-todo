import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../interfaces/Itodo';
import { TodosService } from '../services/todos.service';
import { faTimesCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Input() index: number;
  @Output() onRemoveTodo = new EventEmitter<number>();

  faTimesCircle = faTimesCircle;
  faCircleNotch = faCircleNotch;

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    console.log();
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe(() => {
        this.onRemoveTodo.emit(id);
      });
  }
}
