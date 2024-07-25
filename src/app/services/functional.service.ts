import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private todoUrl = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.postsUrl);
  }

  getTodo(): Observable<any[]> {
    return this.http.get<any[]>(this.todoUrl);
  }

  


}
