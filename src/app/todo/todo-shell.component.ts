import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideComponentStore} from "@ngrx/component-store";
import {TodosStore} from "./store/todos.store";

@Component({
  selector: 'app-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:provideComponentStore(TodosStore)
})
export class TodoShellComponent {

}
