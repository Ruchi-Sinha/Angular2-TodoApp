import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  item;
  oldTodo;
  appState = 'default';
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    var newtodo = this.item;
    this.todos.push({text: newtodo});
    this._todoService.addTodo(newtodo);
    this.item = "";
  }

  deleteTodo(index){
    this.todos.splice(index, 1);
    this._todoService.deleteTodo(index);
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldTodo = todo.text;
    this.item = todo.text;
    console.log(this.appState);
  }

  updateTodo(){
    for(var i=0; i< this.todos.length;i++){
      if(this.todos[i].text == this.oldTodo){
        this.todos[i].text = this.item;
      }
    }
    this._todoService.updateTodo(this.oldTodo, this.item);
    this.item = "";
  }

}
