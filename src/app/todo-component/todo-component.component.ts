import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todo-component',
  templateUrl: 'todo-component.component.html',
  styleUrls: ['todo-component.component.css'],
})
export class TodoComponentComponent implements OnInit {

	public newTodo: string;
	public todoList: any[];

	constructor() {
		this.newTodo = '';
		this.todoList = [];
	}

	addTask(event) {

		if(!this.newTodo)
			return

		var todoObj = {
			task: this.newTodo,
			complete: false
		}

		this.todoList.push(todoObj);
		this.newTodo = '';
		event.preventDefault();
	}

	deleteTask(index) {
		console.log(this.todoList.splice(index, 1));
	}

	ngOnInit() {
	}

}
