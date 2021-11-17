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
    const index: number = this.todoTask.indexOf(task);
    if (index !== -1) {
        this.todoTask.splice(index, 1);
    }
  }

  deleteTaskInProgress(task:any) {
    const index: number = this.inProgressTask.indexOf(task);
    if (index !== -1) {
        this.inProgressTask.splice(index, 1);
    }
  }

  deleteTaskInDone(task:any) {
    const index: number = this.doneTask.indexOf(task);
    if (index !== -1) {
        this.doneTask.splice(index, 1);
    }
  }

  addNewTask(){
    this.todoTask.push({
      name: this.newTask,
      difficulty: this.difficulty
    });
    this.newTask ='';
  }
}
