import {Component, Input} from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})
export class ToDoList {
  public list = ["first"];
  public newEntry = "";
  public selected = [];
  public completed = [];
  addTodo() {
    if (this.newEntry) {
      this.list.push(this.newEntry);
      this.newEntry = '';
    }
  }
  upsertSelected(item, isChecked) {
    const i = this.selected.findIndex(x => x === item);
    if (i > -1) {
      this.selected.splice(i, 1);
    } else {
      this.selected.push(item);
    }
  }
  complete() {
    this.completed = [...this.selected];
    this.list = this.list.filter(x => !this.selected.includes(x));
    this.selected = [];
  }
}