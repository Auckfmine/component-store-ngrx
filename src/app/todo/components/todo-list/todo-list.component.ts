import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodosStore} from "../../store/todos.store";
import {combineLatest, map, tap} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  constructor(private todoStore:TodosStore) {
  }
  protected readonly vm$ = combineLatest([this.todoStore.todos$,this.todoStore.selectedUser$]).pipe(
    map(([todos,user])=>({todos,user}))
  )
}
