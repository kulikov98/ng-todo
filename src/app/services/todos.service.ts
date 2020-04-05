import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ITodo } from '../interfaces/Itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  fetchTodos() {
    return this.http.get('http://localhost:3000/todos?_limit=10')
      .pipe(delay(1500))
  }

  addTodo(todo: ITodo) {
    return this.http.post('http://localhost:3000/todos', todo)
      .pipe(delay(1000))
  }

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`)
      .pipe(delay(500));
  }

  markComplete(todo: ITodo) {
    return this.http.put(`http://localhost:3000/todos/${todo.id}`, todo)
      .pipe(delay(1500));
  }
}
