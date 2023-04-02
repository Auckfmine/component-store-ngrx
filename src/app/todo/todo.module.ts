import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoShellComponent } from './todo-shell.component';
import {SharedModule} from "../shared/shared.module";
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoShellComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class TodoModule { }
