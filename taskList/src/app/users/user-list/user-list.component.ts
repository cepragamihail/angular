import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent {
// Inject the UserService (new in v14)
userService = inject(UserService);

// Variables that don't change value
pageTitle = 'User List';

// Expose the state as signals
users = this.userService.users;
selectedUserId = this.userService.selectedUserId;

// Set the selected user
onSelected(userId: number) {
  this.userService.setSelectedUser(userId);
}
}
