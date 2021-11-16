import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  difficulty: string
}

enum Difficulty {
  EASY= 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD'
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todoTask: Task[] = [];
  inProgressTask: Task[] = [];
  doneTask: Task[] = [];
  newTask: string = '';
  difficulty: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todoTask = [
      { name: 'task1', difficulty: Difficulty.EASY},
      { name: 'task2', difficulty: Difficulty.NORMAL},
      { name: 'task3', difficulty: Difficulty.HARD }
    ]
  }

  moveToInProgress(task: Task) {
    this.todoTask = this.todoTask.filter((x) => x !== task);
    this.inProgressTask = [...this.inProgressTask, task];
  }

  backToTodo(task: Task) {
    this.inProgressTask = this.inProgressTask.filter((x) => x !== task);
    this.todoTask = [...this.todoTask, task];
  }

  backToInProgress(task: Task) {
    this.doneTask = this.doneTask.filter((x) => x !== task);
    this.inProgressTask = [...this.inProgressTask, task];
  }

  moveToDone(task: Task){
    this.inProgressTask = this.inProgressTask.filter((x) => x !== task);
    this.doneTask = [...this.doneTask, task];
  }

  deleteTaskToDo(task:any) {
    this.todoTask.splice(task, 1)
  }

  deleteTaskInProgress(task:any) {
    this.inProgressTask.splice(task, 1)
  }

  deleteTaskInDone(task:any) {
    this.doneTask.splice(task, 1)
  }

  addNewTask(){
    this.todoTask.push({
      name: this.newTask,
      difficulty: this.difficulty
    });
    this.newTask ='';
  }
}
