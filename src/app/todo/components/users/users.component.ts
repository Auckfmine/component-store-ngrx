import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodosStore} from "../../store/todos.store";
import {IUser} from "../../models/user.model";
import {combineLatest, map, startWith} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  constructor(protected readonly todoStore:TodosStore) {
  }
  readonly vm$ = combineLatest([this.todoStore.users$,this.todoStore.selectedUser$.pipe(startWith(undefined))]).pipe(
    map(([users,selectedUser])=>({users ,selectedUser}))
  )
  protected onUserSelectedChanged(user:IUser){
    this.todoStore.setSelectedUser(user)
    this.todoStore.filterTodosByUser(user)
  }
}
