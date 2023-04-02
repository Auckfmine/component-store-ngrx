import { Injectable } from '@angular/core';
import {ComponentStore, OnStoreInit, tapResponse} from "@ngrx/component-store";
import {defaultState, TodosState} from "./todos.state";
import {TodosService} from "../services/todos.service";
import {ITodo} from "../models/todo.model";
import {concatMap, distinctUntilChanged, Observable} from "rxjs";
import {IUser} from "../models/user.model";
import {UsersService} from "../services/users.service";
@Injectable()
export class TodosStore extends ComponentStore<TodosState> implements OnStoreInit {
  constructor(private todosService:TodosService,private userService:UsersService) {
    super(defaultState)
  }
  // selectors
  readonly todos$ = this.select(({todos}) => todos)
  readonly users$ = this.select(({users})=> users)
  readonly selectedUser$ = this.select(({selectedUser})=>selectedUser)

  // updaters
  readonly loadTodos = this.updater((state, todos:ITodo[])=>({
    ...state,
    todos : todos || []
  }))
  readonly loadUsers = this.updater((state, users:IUser[])=>({
    ...state,
    users : users || []
  }))
  readonly setSelectedUser = this.updater((state, user:IUser |undefined)=>({
    ...state,
    selectedUser : user || undefined
  }))
  //effects
  readonly retrieveAllUsersFromAPi = this.effect(($)=>$.pipe(
    concatMap(()=>this.userService.retrieveAllUsers().pipe(
      tapResponse(
        (users) => this.loadUsers(users),
        (error)=>console.log(error)
      )
    ))
  ))

  readonly filterTodosByUser = this.effect((selectedUser$:Observable<IUser |undefined>) => selectedUser$.pipe(
    distinctUntilChanged(),
    concatMap(user => {
      return this.todosService.filterTodosByUser(user).pipe(
        tapResponse(
          (todos)=>this.loadTodos(todos),
          (error)=>console.log(error)
        ))
    })
  ));
  ngrxOnStoreInit(): void {
    this.retrieveAllUsersFromAPi()
  }
}
