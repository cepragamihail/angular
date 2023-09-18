import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styles: [
  ]
})
export class UserTodosComponent {
 // Inject the UserService
 todoService = inject(TodoService);

 // Variables that don't change value
 // pageTitle = 'User Tasks';

 // Expose the state as signals
 userTasks = this.todoService.userTasks;
 completedCount = computed(() => this.userTasks().filter(task => task.completed).length);
 pageTitle = computed(() => `User Tasks - ${this.completedCount()} completed`);

 // Mark as completed
 markComplete(task: ToDo) {
   this.todoService.markComplete(task);
 }
}
