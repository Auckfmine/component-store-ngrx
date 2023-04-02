import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGetAllResponse} from "../dto/get-all-response";
import {IUser} from "../models/user.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly baseURI: string ='https://dummyjson.com/users';
  constructor(private http:HttpClient) { }

  public retrieveAllUsers(){
    return this.http.get<IGetAllResponse<IUser,'users'>>(this.baseURI).pipe(
      map(({users}) => users)
    )
  }
}
