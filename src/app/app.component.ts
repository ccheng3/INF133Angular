import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"; // 
@Component({
  selector: "app-root",
  // standalone: true, 
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [CommonModule, FormsModule, RouterModule] 
})
export class AppComponent {
  todoList: { id: number; text: string; completed: boolean }[] = []; 
  nextId: number = 1; //
  totalNumTasks: number = 0;

  addTask(taskText: string) {
    if (taskText.trim()) {
      this.todoList.push({ id: this.nextId++, text: taskText.trim(), completed: false });
      // console.log(":", this.todoList);
      this.totalNumTasks += 1;
    }
  }

  toggleCompleted(taskId: number) {
    const task = this.todoList.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(taskId: number) {
    this.todoList = this.todoList.filter(task => task.id !== taskId);
    this.totalNumTasks -= 1;
  }
}