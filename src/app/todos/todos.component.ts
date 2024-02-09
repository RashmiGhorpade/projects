import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:todo[];
  inputTodo:string="";
  constructor(){}
  ngOnInit(): void {
      this.todos=[
      {
      content:'first todo',
      completed:false,
      },
      {
        content:'second todo',
        completed:false,
      }];
  }
  toggleDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed = !v.completed
      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i)=>i != id);
  }

  addTodo() {
    if (typeof this.inputTodo === 'string') {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo = "";
    } else {
      console.error("Input todo is not a string.");
    }
  }
  
}