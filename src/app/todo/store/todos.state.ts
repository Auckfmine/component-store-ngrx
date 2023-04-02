import {ITodo} from "../models/todo.model";
import {IUser} from "../models/user.model";

export interface TodosState {
  todos: ITodo[],
  users: IUser[],
  selectedUser : IUser | undefined
}

export const defaultState:TodosState =  {
  todos: [],
  users: [],
  selectedUser : undefined
}
