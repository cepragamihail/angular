import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserShellComponent } from './users/user-shell/user-shell.component';
import { UserTodosComponent } from './todos/user-todos/user-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShellComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
