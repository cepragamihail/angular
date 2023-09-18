import { Component } from '@angular/core';

@Component({
  selector: 'app-user-shell',
  template: `
  <div class='row'>
  <div class='col-md-4'>
    <app-user-list></app-user-list>
  </div>
  <div class='col-md-8'>
    <app-user-todos></app-user-todos>
  </div>
</div>
`,
  styles: [
  ]
})
export class UserShellComponent {

}
