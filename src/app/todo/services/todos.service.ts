import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGetAllResponse} from "../dto/get-all-response";
import {map, Observable, tap} from "rxjs";
import {ITodo} from "../models/todo.model";
import {IUser} from "../models/user.model";
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly backendEndpoint: string = 'https://dummyjson.com/todos';
  constructor(private http:HttpClient) { }

  public retrieveAllTodos(): Observable<ITodo[]> {
    return this.http.get<IGetAllResponse<ITodo,'todos'>>(this.backendEndpoint).pipe(
      map(({todos}) => todos),
    )
  }
  public filterTodosByUser(user:IUser |undefined){
    return this.http.get<IGetAllResponse<ITodo, 'todos'>>(`${this.backendEndpoint}/user/${user?.id}`).pipe(
      map(({todos}) => todos)
    )
  }
}
