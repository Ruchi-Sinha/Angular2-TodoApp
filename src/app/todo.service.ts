import { Injectable } from '@angular/core';
import { Init } from './init.todos'

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log("todo service initialized");
    this.load();
  }

  getTodos(){
    var  todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var  todos = JSON.parse(localStorage.getItem('todos'));
    todos.push({text:newTodo});
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(index){
    var  todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldTodo, newTodo){
    var  todos = JSON.parse(localStorage.getItem('todos'));
    for(var i=0; i< todos.length;i++){
      if(todos[i].text == oldTodo){
        todos[i].text = newTodo;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
